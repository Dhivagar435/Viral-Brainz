"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useSpring,
  useScroll,
  Variants,
} from "framer-motion";
import { Compass, PenTool, BarChart3, Layers, UserCheck, ArrowUpRight } from "lucide-react";
import MagneticText from "../ui/MagneticText";

const reasons = [
  { icon: Compass, title: "Strategy First", description: "Every campaign begins with business goals not assumptions." },
  { icon: PenTool, title: "Creative That Performs", description: "Content designed to stop scrolling and start conversations." },
  { icon: BarChart3, title: "Data Driven", description: "Every decision is backed by insights and measurable performance." },
  { icon: Layers, title: "End-to-End Solutions", description: "Everything your digital presence needs under one roof." },
  { icon: UserCheck, title: "Dedicated Experts", description: "A passionate team focused on delivering consistent results." },
];

const ReasonRow = ({
  index,
  icon: Icon,
  title,
  description,
}: {
  index: number;
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--color-primary-wash), transparent 70%)`;

  // SCROLL-LINKED horizontal drift, tracked to THIS row's own position in the viewport
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"], // row enters from bottom, tracked until it exits top
  });

  // alternate direction per row: even rows drift left->right, odd rows right->left
  const fromX = index % 2 === 0 ? -80 : 80;
  const rawX = useTransform(scrollYProgress, [0, 0.5, 1], [fromX, 0, -fromX * 0.3]);
  const x = useSpring(rawX, { stiffness: 120, damping: 24, mass: 0.5 });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      ref={rowRef}
      style={{ x, opacity }}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-surface-border overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 flex items-center gap-6 sm:gap-10 py-8 sm:py-10 px-2 sm:px-4">
        <span className="text-2xl sm:text-3xl font-mono text-text-faint w-10 sm:w-14 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-surface-border flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-light group-hover:text-primary transition-colors duration-300 mb-1">
            {title}
          </h3>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <span className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-surface-border opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </span>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["70%", "30%"]);

  return (
    <section ref={sectionRef} id="why-us" className="relative bg-surface py-24 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--x) 25%, var(--color-primary-wash) 0%, transparent 50%)",
          ["--x" as string]: glowX,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Us
          </span>
          <MagneticText>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Why Brands Choose <span className="text-primary">Viral Brainz?</span>
            </h2>
          </MagneticText>
        </motion.div>

        <div className="border-t border-surface-border">
          {reasons.map((reason, index) => (
            <ReasonRow key={reason.title} index={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;