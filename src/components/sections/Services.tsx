"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Users,
  Code2,
  Film,
  Smartphone,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { containerVariants, itemVariants } from "@/src/utils/motion";
import MagneticText from "../MagneticText";

const services = [
  {
    icon: FaInstagram,
    title: "Social Media Management",
    description:
      "We create engaging content, manage communities, and build meaningful brand presence across Instagram, Facebook, LinkedIn, X, and emerging platforms.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Scale your business through highly targeted Meta, Google, and YouTube advertising campaigns designed for maximum ROI.",
  },
  {
    icon: FaYoutube,
    title: "YouTube Management",
    description:
      "From strategy and scripting to production, optimization, monetization, and analytics — we manage every aspect of your YouTube journey.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Increase your search visibility through technical SEO, keyword optimization, content strategy, and link building.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Collaborate with creators that align with your brand and drive authentic audience engagement.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Modern, responsive, SEO-friendly websites designed to convert visitors into customers.",
  },
  {
    icon: Film,
    title: "Movie Promotions",
    description:
      "Digital campaigns including trailer launches, influencer collaborations, meme marketing, paid advertising, and release promotions.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Email Marketing",
    description:
      "Reach your audience through personalized WhatsApp, SMS, and email campaigns that improve engagement and conversions.",
  },
];

// Individual card — needs its own component to track mouse position per-card
const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // spotlight position, as a %
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: px, y: py });

    // subtle 3D tilt based on cursor position
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const reset = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div variants={itemVariants} style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="group relative bg-light/5 border border-primary/15 rounded-2xl p-8 overflow-hidden hover:border-primary/50 transition-colors duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* cursor-tracking spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(253, 185, 19, 0.15), transparent 70%)`,
          }}
        />

        {/* ghost number, background decoration */}
        {/* <span className="absolute -top-4 -right-2 text-8xl font-black text-primary/5 select-none group-hover:text-primary/10 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span> */}

        <div
          className="relative z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-dark transition-colors duration-300" />
          </div>

          <h3 className="text-xl font-bold text-light mb-3">{title}</h3>
          <p className="text-light/60 leading-relaxed text-sm">{description}</p>

          {/* animated arrow, appears on hover */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mt-5 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Learn more
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative bg-dark py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(253, 185, 19, 0.1) 0%, transparent 50%)",
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
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <MagneticText>
            {" "}
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Digital Marketing <span className="text-primary">Services</span>
            </h2>
          </MagneticText>
          <p className="text-light/60 text-lg">
            End-to-end digital solutions built to grow your brand, your way.
          </p>
        </motion.div>

       <MagneticText>
         <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
       </MagneticText>
      </div>
    </section>
  );
};

export default Services;
