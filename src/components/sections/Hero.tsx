"use client";

import { containerVariants, itemVariants } from "@/src/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticText from "../MagneticText";
import FloatingIcons from "../FloatingIcons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-dark overflow-hidden flex items-center"
    >
      {/* Radial glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(253, 185, 19, 0.15) 0%, transparent 50%)",
        }}
      />

      <FloatingIcons />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20"
      />

      {/* Main Content — two columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <MagneticText>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-light mb-6 leading-tight"
            >
              We Build Brands That{" "}
              <span className="text-primary">People Follow</span>. Businesses
              That <span className="text-primary">People Remember</span>.
            </motion.h1>
          </MagneticText>

          <MagneticText>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-light/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
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
                boxShadow: "0 20px 40px rgba(253, 185, 19, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Grow Together
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FDB913",
                color: "#000000",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{
              borderRadius: [
                "63% 37% 54% 46% / 43% 39% 61% 57%",
                "37% 63% 46% 54% / 61% 43% 57% 39%",
                "63% 37% 54% 46% / 43% 39% 61% 57%",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden shadow-2xl border-4 border-primary/40"
          >
            <Image
              src="/hero-team2.jpg"
              alt="Digital marketing team collaborating"
              width={800}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* <div
            className="relative overflow-hidden shadow-2xl border-4 border-primary/40"
            style={{
              borderRadius: "63% 37% 54% 46% / 43% 39% 61% 57%",
            }}
          >
            <Image
              src="/hero-team2.jpg"
              alt="Digital marketing team collaborating"
              width={800}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div> */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-primary rounded-2xl px-6 py-4 shadow-xl"
          >
            <p className="text-2xl font-bold text-dark">10+</p>
            <p className="text-sm text-dark/70 font-medium">Years of Growth</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-light/60 text-sm font-medium mb-2">
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
