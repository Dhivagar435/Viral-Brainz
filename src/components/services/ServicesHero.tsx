"use client";

import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative bg-surface pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 20%, var(--color-primary-wash) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-light leading-tight [text-shadow:0_0_35px_var(--color-primary-glow)]"
        >
          Digital Marketing <span className="text-primary">Services</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default ServicesHero;