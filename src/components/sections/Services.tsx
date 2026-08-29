"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  Search,
  Users,
  Code2,
  Film,
  Smartphone,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import MagneticText from "../MagneticText";

const services = [
  {
    icon: FaInstagram,
    category: "Content",
    title: "Social Media Management",
    outcome: "Consistent daily presence, zero guesswork",
    features: [
      "Content calendar",
      "Community management",
      "Cross-platform posting",
    ],
  },
  {
    icon: TrendingUp,
    category: "Growth",
    title: "Performance Marketing",
    outcome: "Every rupee tracked back to ROI",
    features: [
      "Meta & Google Ads",
      "Conversion tracking",
      "A/B tested creative",
    ],
  },
  {
    icon: FaYoutube,
    category: "Content",
    title: "YouTube Management",
    outcome: "From script to monetized channel",
    features: [
      "Scripting & production",
      "SEO optimization",
      "Analytics reporting",
    ],
  },
  {
    icon: Search,
    category: "Growth",
    title: "SEO",
    outcome: "Rank where your customers search",
    features: ["Technical audits", "Keyword strategy", "Link building"],
  },
  {
    icon: Users,
    category: "Content",
    title: "Influencer Marketing",
    outcome: "Borrowed trust, real conversions",
    features: [
      "Creator matching",
      "Campaign management",
      "Performance tracking",
    ],
  },
  {
    icon: Code2,
    category: "Tech",
    title: "Website Development",
    outcome: "Built to convert, not just to look good",
    features: ["Responsive design", "SEO-ready structure", "Fast load times"],
  },
  {
    icon: Film,
    category: "Growth",
    title: "Movie Promotions",
    outcome: "Launch-day buzz that actually lands",
    features: ["Trailer campaigns", "Influencer tie-ins", "Meme marketing"],
  },
  {
    icon: Smartphone,
    category: "Growth",
    title: "Mobile & Email Marketing",
    outcome: "Direct line to your audience",
    features: ["WhatsApp campaigns", "SMS automation", "Email sequences"],
  },
];

const StackCard = ({
  icon: Icon,
  category,
  title,
  outcome,
  features,
  index,
  total,
  isLast,
}: {
  icon: React.ElementType;
  category: string;
  title: string;
  outcome: string;
  features: string[];
  index: number;
  total: number;
  isLast: boolean;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start center", "center center"],
  });

  // Smoother scale with better progression
  const scale = useTransform(scrollYProgress, [0, 1], [isLast ? 1 : 0.8, 1]);

  // Opacity remains visible throughout
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    isLast ? [1, 1] : [0.6, 1],
  );

  // Smooth lateral movement from sides to center
  const startX = isLeft ? -120 : 120;
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);

  // Rotation for depth effect
  const rotate = useTransform(scrollYProgress, [0, 1], [isLeft ? -3 : 3, 0]);

  // Y offset for staggered effect
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div ref={wrapperRef} className="relative h-[120vh]">
      <motion.div
        style={{
          scale,
          opacity,
          x,
          y,
          rotate,
          zIndex: index,
        }}
        className="sticky top-24 sm:top-28 w-full sm:w-[55%] md:w-[65%] mx-auto"
      >
        <div
          className="relative bg-gradient-to-br from-dark-800 to-dark-900 border border-primary/10 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-between backdrop-blur-sm"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/0 rounded-full blur-3xl" />

          <div className="relative z-10 flex items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-dark" />
              </div>
              <span className="text-primary/70 text-xs font-mono uppercase tracking-widest border border-primary/30 rounded-full px-3 py-1">
                {category}
              </span>
            </div>
            <span className="text-primary font-mono text-sm sm:text-base pt-2">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="relative z-10 mt-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-light mb-2">
              {title}
            </h3>
            <p className="text-primary/90 text-sm sm:text-base font-medium mb-5">
              {outcome}
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="text-xs sm:text-sm text-light-70 bg-dark-700 border border-dark-700 rounded-full px-3 py-1.5"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative bg-dark-900 py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, var(--color-primary-100) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-dark-800 border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <MagneticText>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Digital Marketing <span className="text-primary">Services</span>
            </h2>
          </MagneticText>
          <p className="text-light-70 text-lg">
            Scroll through — each service stacks as you go.
          </p>
        </motion.div>

        <div>
          {services.map((service, index) => (
            <StackCard
              key={service.title}
              {...service}
              index={index}
              total={services.length}
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
