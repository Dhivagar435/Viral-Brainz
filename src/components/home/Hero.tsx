"use client";

import { containerVariants, itemVariants } from "@/src/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticText from "../ui/MagneticText";
import FloatingIcons from "../FloatingIcons";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = ["/hero-team2.jpg", "/hero-bg-2.jpg", "/hero-bg-1.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-surface overflow-hidden flex items-center pt-20 md:pt-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-primary-wash) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-20 right-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10" />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <MagneticText>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-light mb-6 leading-tight max-w-2xl mx-auto lg:mx-0"
            >
              We Build Brands That{" "}
              <span className="text-primary">People Follow</span>. Businesses
              That <span className="text-primary">People Remember</span>.
            </motion.h1>
          </MagneticText>

          <MagneticText>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              From social media and performance marketing to YouTube growth,
              influencer campaigns, SEO, and website development we help
              ambitious brands create impact across every digital touchpoint.
            </motion.p>
          </MagneticText>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-primary-hover)",
                boxShadow: "0 20px 40px var(--color-primary-glow)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Let's Grow Together
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
                backgroundColor: "var(--color-surface-card)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-80 sm:h-96 lg:h-125"
        >
          <div
            className="relative overflow-hidden shadow-2xl border-4 border-surface-border w-full h-full"
            style={{ borderRadius: "63% 37% 54% 46% / 43% 39% 61% 57%" }}
          >
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image}
                  alt={`Digital marketing team collaborating ${index + 1}`}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <FloatingIcons />

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                animate={{
                  backgroundColor:
                    currentImageIndex === index
                      ? "var(--color-primary)"
                      : "var(--color-primary-soft)",
                  scale: currentImageIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full cursor-pointer"
              />
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-2 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 left-2 sm:left-2 md:-left-4 lg:-left-6 z-30 bg-primary rounded-lg sm:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-3 lg:py-4 shadow-lg sm:shadow-xl whitespace-nowrap"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-dark">
              10+{" "}
              <span className="text-xs sm:text-sm md:text-sm lg:text-sm font-medium">
                Years of Growth
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-text-faint text-sm font-medium mb-2">
          Scroll to explore
        </p>
        <svg
          className="w-6 h-6 mx-auto text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
