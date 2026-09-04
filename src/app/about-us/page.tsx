"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MissionVision from "../../components/about/MissionVision";
import TeamGrid from "../../components/about/TeamGrid";
import OurValues from "../../components/about/OurValues";


export default function AboutUsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <>
      {/* PAGE INTRO */}
      <section
        ref={heroRef}
        className="relative bg-surface pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden"
      >
        <motion.div
          style={{ y: glowY, opacity: glowOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 20%, var(--color-primary-wash) 0%, transparent 55%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            About Us
          </motion.span> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-light leading-tight mb-6 [text-shadow:0_0_35px_var(--color-primary-glow)]"
          >
            About <span className="text-primary">Viral Brainz</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Viral Brainz is a full-service digital marketing agency helping
            brands strengthen their online presence through strategic
            marketing, compelling content, and performance-driven campaigns.
            Our experienced team combines creativity, technology, and
            analytics.
          </motion.p>
        </div>
      </section>

      <MissionVision />
      <TeamGrid />
      <OurValues />
    </>
  );
}