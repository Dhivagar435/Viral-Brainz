"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import { Lightbulb, Sparkles, Shield, Target, Users2 } from "lucide-react";
import { containerVariants, itemVariants } from "../../utils/motion";

const values = [
  { icon: Lightbulb, label: "Innovation", description: "Fresh ideas over safe formulas." },
  { icon: Sparkles, label: "Creativity", description: "Content that stops the scroll." },
  { icon: Shield, label: "Transparency", description: "Clear reporting, no smoke and mirrors." },
  { icon: Target, label: "Results", description: "Every campaign tied to a measurable goal." },
  { icon: Users2, label: "Collaboration", description: "Your team, our team, one roadmap." },
];





const OurValues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={sectionRef} className="relative bg-surface py-20 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
        >
          <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light">
            Our <span className="text-primary">Values</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {values.map(({ icon: Icon, label, description }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center text-center bg-surface-card border border-surface-border rounded-2xl px-4 py-8 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="relative w-16 h-16 mb-4">
                <motion.div
                  style={{ rotate: ringRotate }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                />
                <div className="absolute inset-2 rounded-full bg-surface flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <span className="text-light font-semibold text-sm sm:text-base mb-1">
                {label}
              </span>
              <span className="text-text-faint text-xs leading-relaxed">
                {description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;