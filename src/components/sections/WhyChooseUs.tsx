"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, BarChart3, Layers, UserCheck } from "lucide-react";
import { containerVariants, itemVariants } from "@/src/utils/motion";
import MagneticText from "../MagneticText";

const reasons = [
  {
    icon: Compass,
    title: "Strategy First",
    description: "Every campaign begins with business goals not assumptions.",
  },
  {
    icon: PenTool,
    title: "Creative That Performs",
    description: "Content designed to stop scrolling and start conversations.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Every decision is backed by insights and measurable performance.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "Everything your digital presence needs under one roof.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Experts",
    description: "A passionate team focused on delivering consistent results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative bg-surface py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 25%, var(--color-primary-wash) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-5"
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-light mb-2">{title}</h3>
              <p className="text-text-muted leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;