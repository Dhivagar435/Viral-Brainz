"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Trophy, Sparkles } from "lucide-react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import InfiniteSpiral from "../ui/InfiniteSpiral";
import MagicRings from "../ui/MagicRings";
import DepthText from "../ui/DeepthText";
import { motion } from "framer-motion";

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: FaInstagram,
      value: 225,
      suffix: "%",
      label: "YouTube subscriber growth for Blacksheep",
    },
    {
      icon: TrendingUp,
      value: 1,
      suffix: "M+",
      label: "Trailer views within 48 hours",
    },
    {
      icon: FaTwitter,
      value: 1,
      prefix: "No.",
      suffix: "",
      label: "Twitter trends achieved",
    },
    {
      icon: Users,
      value: 15,
      suffix: "+",
      label: "YouTube channels built",
    },
    {
      icon: Trophy,
      value: 10,
      suffix: "+",
      label: "Years of combined growth expertise",
    },
    {
      icon: Sparkles,
      value: 100,
      suffix: "+",
      label: "Successful campaigns across India & Singapore",
    },
  ];

  return (
    <section className="relative  md:min-h-screen bg-surface px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* MAGIC RINGS BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <MagicRings
          color="#FDB913"
          colorTwo="#FDD873"
          ringCount={6}
          speed={0.8}
          attenuation={10}
          lineThickness={1.5}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.08}
          opacity={0.15}
          blur={2}
          noiseAmount={0.05}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0}
          hoverScale={1}
          parallax={0}
          clickBurst={false}
        />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10">
        {/* CENTERED HEADING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10 sm:mb-14 md:mb-20 px-4 sm:px-12 md:px-16 overflow-visible"
        >
          <DepthText
            text="ACHIEVEMENTS"
            layers={34}
            depth={2.4}
            faceColor="var(--color-light)"
            depthColor="var(--color-primary)"
            tilt={7.5}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.35}
            fontSize="clamp(2.2rem, 9vw, 7rem)"
            fontWeight={900}
            shadow
          />
        </motion.div>

        {/* LAYOUT: stacked on mobile (text -> spiral), side-by-side from md up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
          {/* TEXT */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left">
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed transition-all duration-1000 delay-200 text-white/70 max-w-sm mx-auto md:mx-0 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              Strategy meets creativity to deliver measurable results. Our
              approach combines data-driven insights with bold creative execution,
              ensuring every project drives real business impact and meaningful
              growth for our partners.
            </p>

            {/* STATS COUNTER */}
            <div
              className={`pt-6 sm:pt-8 border-t border-[#1F1F1F] transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="flex items-baseline justify-center md:justify-start gap-2 sm:gap-3">
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-black"
                  style={{ color: "#FDB913" }}
                >
                  500+
                </span>
                <span className="text-xs sm:text-sm text-white/50">
                  Projects delivered successfully
                </span>
              </div>
            </div>
          </div>

          {/* SPIRAL WITH ICONS — appears below text on mobile via source order */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              style={{
                height: "360px",
                position: "relative",
                overflow: "hidden",
              }}
              className="sm:!h-[440px] md:!h-[600px]"
            >
              <InfiniteSpiral
                items={stats}
                animationMode="auto"
                speed={0.55}
                radius={120}
                cardWidth={140}
                cardHeight={140}
                verticalSpacing={60}
                perspective={1000}
                cardRadius={10}
                centerScale={1.2}
                edgeBlur={6}
                cardsPerTurn={7}
                pauseOnHover
                direction="up"
                rotation={0}
                cardTilt={0}
                edgeFade={0.3}
                renderCard={(item) => (
                  <div className="flex flex-col items-center justify-center h-full bg-[#141414] rounded-lg border border-[#1F1F1F] p-3 sm:p-4 hover:border-[#FDB913] transition-colors gap-1.5 sm:gap-2">
                    <div className="text-xl sm:text-2xl" style={{ color: "#FDB913" }}>
                      {item.icon ? <item.icon size={22} className="sm:hidden" /> : null}
                      {item.icon ? <item.icon size={28} className="hidden sm:block" /> : null}
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] sm:text-xs font-semibold text-white">
                        {item.prefix}
                        {item.value}
                        {item.suffix}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/50 mt-1">
                        {item.label}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}