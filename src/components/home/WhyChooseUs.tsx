"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  Variants,
} from "framer-motion";
import { Compass, PenTool, BarChart3, Layers, UserCheck } from "lucide-react";
import { containerVariants } from "@/src/utils/motion";
import MagneticText from "../ui/MagneticText";

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
    description:
      "Every decision is backed by insights and measurable performance.",
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

const fallVariants: Variants = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12, mass: 0.8 },
  },
};

// tilt card: tracks mouse position, rotates card in 3D toward cursor
const TiltCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={fallVariants}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
    >
      <motion.div
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ transform: "translateZ(30px)" }}
        className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-5"
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>
      <h3
        className="text-xl font-bold text-light mb-2"
        style={{ transform: "translateZ(20px)" }}
      >
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
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
    <section
      ref={sectionRef}
      id="why-us"
      className="relative bg-surface py-24 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--x) 25%, var(--color-primary-wash) 0%, transparent 50%)",
          ["--x" as string]: glowX,
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
              Why Brands Choose{" "}
              <span className="text-primary">Viral Brainz?</span>
            </h2>
          </MagneticText>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {reasons.map(({ icon, title, description }) => (
            <TiltCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
