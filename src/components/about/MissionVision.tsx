"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Eye } from "lucide-react";

const Card = ({
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
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const fromX = index % 2 === 0 ? -60 : 60;
  const rawX = useTransform(scrollYProgress, [0, 0.4], [fromX, 0]);
  const x = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.5 });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 22 });

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-surface-card border border-surface-border rounded-3xl p-8 sm:p-10 overflow-hidden group hover:border-primary/40 transition-colors duration-300"
    >
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary-glow)" }}
      />

      <motion.div
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-14 h-14 rounded-2xl bg-surface border border-surface-border flex items-center justify-center mb-6"
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>

      <h3 className="relative text-2xl sm:text-3xl font-bold text-light mb-4">
        {title}
      </h3>
      <p className="relative text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
};

const MissionVision = () => {
  return (
    <section className="relative bg-surface py-20 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card
            index={0}
            icon={Target}
            title="Our Mission"
            description="To empower brands with innovative digital strategies that inspire audiences and deliver measurable growth — turning attention into loyal customers."
          />
          <Card
            index={1}
            icon={Eye}
            title="Our Vision"
            description="To become one of India's most trusted digital growth partners by consistently delivering creativity, performance, and measurable business success."
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;