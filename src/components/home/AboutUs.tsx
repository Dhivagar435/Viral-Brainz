

"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Flower2, Megaphone } from "lucide-react";

const waveContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  hover: {
    transition: { staggerChildren: 0.05 },
  },
};

const waveWord: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: [0, -10, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Word = ({ children }: { children: string }) => (
  <motion.span variants={waveWord} className="inline-block">
    {children}
  </motion.span>
);

const WordGroup = ({ text }: { text: string }) => (
  <>
    {text.split(" ").map((word, i) => (
      <span key={i}>
        <Word>{word}</Word>{" "}
      </span>
    ))}
  </>
);

const imageFromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageFromRight: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const AboutUs = () => {
  return (
    <section id="about-us" className="relative bg-dark py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 40%, var(--color-primary-wash) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* label */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <Megaphone className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">
            About Company
          </span>
        </motion.div> */}

        <motion.h2
          variants={waveContainer}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-tight mb-16 [text-shadow:0_0_40px_var(--color-primary)]"
        >
          <WordGroup text="A digital agency helps businesses with their online presence," />{" "}
          <motion.span
            variants={imageFromLeft}
            className="relative inline-block w-20 h-12 md:w-28 md:h-16 rounded-full overflow-hidden align-middle mx-1"
          >
            <Image src="/about/team-1.jpg" alt="" fill
              sizes="(max-width: 768px) 80px, 112px" className="object-cover" />
          </motion.span>{" "}
          <WordGroup text="branding, marketing, user experience," />{" "}
          <motion.span
            variants={imageFromRight}
            className="relative inline-block w-20 h-12 md:w-28 md:h-16 rounded-full overflow-hidden align-middle mx-1"
          >
            <Image src="/about/team-2.jpg" alt="" fill
              sizes="(max-width: 768px) 80px, 112px" className="object-cover" />
          </motion.span>{" "}
          <WordGroup text="and often technology." />
        </motion.h2>

        {/* divider */}
        <div className="h-px w-full bg-surface-border mb-10" />

        {/* bottom row: circular button + stats/description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 md:gap-16 text-center md:text-left"
        >
          {/* stats + description */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-primary font-semibold text-sm sm:text-base">@2025</span>
              <span className="text-light font-semibold text-sm sm:text-base">
                Based in Tamil Nadu
              </span>
            </div>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
              Viral Brainz is a full-service digital marketing agency helping
              brands strengthen their online presence through strategic
              marketing, compelling content, and performance-driven campaigns.
              Our experienced team combines creativity, technology, and
              analytics.
            </p>
          </div>

          {/* vertical divider - desktop only */}
          <div className="hidden md:block w-px self-stretch bg-surface-border" />

          {/* circular fill-on-hover button */}
          <Link
            href="/about-us"
            className="group relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-full border border-surface-border flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full border-0 border-primary group-hover:border-[48px] sm:group-hover:border-[56px] md:group-hover:border-[64px] transition-[border-width] duration-500 ease-out" />
            <span className="relative z-10 flex flex-col items-center text-light group-hover:text-dark transition-colors duration-500 text-xs sm:text-sm font-semibold text-center leading-tight">
              Get To
              <span className="flex items-center gap-1">
                Know Us <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
