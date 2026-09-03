"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import MagneticText from "../ui/MagneticText";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, var(--color-primary-wash), transparent 70%)`;

  // gentle scroll-linked scale on the whole panel
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 24, mass: 0.5 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-surface py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--color-primary-wash) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative text-center bg-surface-card border border-surface-border rounded-3xl px-8 py-16 sm:px-16 sm:py-20 overflow-hidden hover:border-primary/30 transition-colors duration-500"
        >
          {/* cursor-tracked glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlight }}
          />

          {/* corner accent icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>

          <div className="relative">
            <span className="inline-block bg-surface border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Let&apos;s Build Something Extraordinary
            </span>

            <MagneticText>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-6 leading-tight [text-shadow:0_0_30px_var(--color-primary-glow)]">
                Start Your Digital Growth{" "}
                <span className="text-primary">Journey Today</span>
              </h2>
            </MagneticText>

            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              Whether you&apos;re launching a new brand or scaling an existing
              one, Viral Brainz is ready to help you grow.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-tint hover:-translate-y-1 hover:shadow-[0_0_35px_var(--color-primary-glow)] transition-all duration-300"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;