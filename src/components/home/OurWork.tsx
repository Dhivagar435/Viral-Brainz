"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { containerVariants } from "@/src/utils/motion";
import MagneticText from "../ui/MagneticText";
import DepthCarousel from "../ui/DepthCarousel";

const caseStudies = [
  {
    client: "Blacksheep",
    stat: "225%",
    statLabel: "YouTube subscriber growth",
    description:
      "A creator-led channel scaled from a standing start to consistent six-figure monthly views.",
    image: "/services/youtube.png",
  },
  {
    client: "Salliyargal",
    stat: "1M+",
    statLabel: "Trailer views within 48 hours",
    description:
      "Coordinated launch push across paid, organic, and influencer channels ahead of release day.",
    image: "/services/email-marketing.png",
  },
  {
    client: "Ponniyin Selvan 2",
    stat: "Global",
    statLabel: "Influencer campaign across India & Singapore",
    description:
      "Multi-market rollout syncing creators, press, and paid media around a single release window.",
    image: "/services/movie-promotion.png",
  },
  {
    client: "Blacksheep",
    stat: "225%",
    statLabel: "YouTube subscriber growth",
    description:
      "A creator-led channel scaled from a standing start to consistent six-figure monthly views.",
    image: "/services/youtube.png",
  },
  {
    client: "Salliyargal",
    stat: "1M+",
    statLabel: "Trailer views within 48 hours",
    description:
      "Coordinated launch push across paid, organic, and influencer channels ahead of release day.",
    image: "/services/email-marketing.png",
  },
  {
    client: "Ponniyin Selvan 2",
    stat: "Global",
    statLabel: "Influencer campaign across India & Singapore",
    description:
      "Multi-market rollout syncing creators, press, and paid media around a single release window.",
    image: "/services/movie-promotion.png",
  },
];

const carouselItems = caseStudies.map(({ image, client, stat, statLabel }) => ({
  image,
  alt: client,
  badge: stat,
  label: client,
  sublabel: statLabel,
}));

const OurWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section id="work" className="relative bg-surface py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 80%, var(--color-primary-wash) 0%, transparent 50%)",
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
            Our Work
          </span>
          <MagneticText>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
          </MagneticText>
          <p className="text-text-muted text-lg">
            Real campaigns, real growth, for brands across industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12"
        >
          {/* LEFT — carousel */}
          <div style={{ height: "500px", position: "relative" }}>
            <DepthCarousel
              items={carouselItems}
              depth={220}
              spread={90}
              tilt={22}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.2}
              blur={6}
              autoplay
              loop
              cardWidth={340}
              cardHeight={420}
              radius={18}
              tint="var(--color-dark)"
              duration={700}
              ease="power3.out"
              autoplayDelay={3200}
              showControls={false}
              showIndicators={false}
              onChange={(index) => setActiveIndex(index)}
            />
          </div>

          {/* RIGHT — reactive text, synced to active card */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-primary text-lg font-semibold uppercase tracking-wide mb-2">
                  {active.stat}
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-tight mb-4 [text-shadow:0_0_30px_var(--color-primary-glow)]">
                  {active.client}
                </h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl">
                  {active.statLabel}. {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors duration-300"
          >
            View All Work
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
