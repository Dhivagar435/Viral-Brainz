"use client";

import { containerVariants, itemVariants } from "@/src/utils/motion";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface BlobImageProps {
  src: string;
  alt: string;
  variant?: "organic" | "wavy" | "asymmetric" | "smooth";
  className?: string;
}

const BlobImage = ({ src, alt, variant = "asymmetric", className = "" }: BlobImageProps) => {
  const borderRadius = {
    organic: "58% 42% 63% 37% / 41% 56% 44% 59%",
    wavy: "45% 55% 60% 40% / 55% 45% 55% 45%",
    asymmetric: "72% 28% 66% 34% / 68% 55% 45% 32%",
    smooth: "50% 50% 47% 53% / 50% 42% 58% 50%",
  };

  return (
    <motion.div
      animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className={`relative overflow-hidden shadow-2xl shrink-0 ${className}`}
      style={{ borderRadius: borderRadius[variant] }}
    >
      <Image src={src} alt={alt} fill priority sizes="200px" className="object-cover" />
    </motion.div>
  );
};

// Cross-browser outline text — uses text-shadow fallback stroke so it renders
// consistently even where -webkit-text-stroke behaves inconsistently
const OutlineText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={className}
    style={{
      color: "transparent",
      WebkitTextStroke: "2px var(--color-primary)",
      textShadow: `
        -1.5px -1.5px 0 var(--color-primary),
        1.5px -1.5px 0 var(--color-primary),
        -1.5px 1.5px 0 var(--color-primary),
        1.5px 1.5px 0 var(--color-primary),
        0 -1.5px 0 var(--color-primary),
        0 1.5px 0 var(--color-primary),
        -1.5px 0 0 var(--color-primary),
        1.5px 0 0 var(--color-primary)
      `,
    }}
  >
    {children}
  </span>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-surface overflow-hidden flex items-center pt-24 md:pt-0"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero/hero-bg-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-dark/55" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, var(--color-primary-wash) 0%, transparent 55%)",
        }}
      />

      {/* Blob image floated top-right, behind text */}
      <div className="absolute top-24 right-6 sm:right-16 lg:right-24 z-0 opacity-90">
        <BlobImage
          src="/about/team-3.jpg"
          alt="Our team at work"
          variant="asymmetric"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Badge row */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6 text-primary" fill="currentColor" />
          </motion.div>
          <div className="flex items-center -space-x-3">
            <div className="w-9 h-9 rounded-full border-2 border-surface overflow-hidden relative">
              <Image src="/avatars/client-1.webp" alt="Client" fill sizes="36px" className="object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-surface overflow-hidden relative">
              <Image src="/avatars/client-2.webp" alt="Client" fill sizes="36px" className="object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-surface overflow-hidden relative">
              <Image src="/avatars/client-3.webp" alt="Client" fill sizes="36px" className="object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-surface overflow-hidden relative">
              <Image src="/avatars/client-4.webp" alt="Client" fill sizes="36px" className="object-cover" />
            </div>
          </div>
          <span className="text-text-muted text-sm sm:text-base font-medium leading-tight">
            300+<br />Happy Customers
          </span>
        </motion.div>

        {/* Offset staggered headline — solid + outline treatment */}
        <div className="relative">
          {/* Outer div: entrance animation via variants */}
          <motion.div variants={itemVariants}>
            {/* Inner: continuous float, separate from entrance */}
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-light leading-[0.85] tracking-tight"
            >
              DIGITAL
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="ml-8 sm:ml-16 md:ml-24">
            <motion.h1
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.85] tracking-tight"
            >
              <OutlineText>IMPACT</OutlineText>
            </motion.h1>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-xl mt-10 sm:mt-14 ml-1"
        >
          From social media and performance marketing to YouTube growth,
          influencer campaigns, SEO, and web development — we help brands
          create impact across every digital touchpoint.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;