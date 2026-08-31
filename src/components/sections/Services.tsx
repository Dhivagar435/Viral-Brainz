"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
    image: "/services/social media marketing.jpg",
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
    image: "/services/performance-marketing.jpg",
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
    image: "/services/youtube2.jpg",
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
    image: "/services/seo.jpg",
    category: "Growth",
    title: "SEO",
    outcome: "Rank where your customers search",
    features: ["Technical audits", "Keyword strategy", "Link building"],
  },
  {
    icon: Users,
    image: "/services/social-media-management.jpg",
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
    image: "/services/website-development.jpg",
    category: "Tech",
    title: "Website Development",
    outcome: "Built to convert, not just to look good",
    features: ["Responsive design", "SEO-ready structure", "Fast load times"],
  },
  {
    icon: Film,
    image: "/services/movie-promotion.jpg",
    category: "Growth",
    title: "Movie Promotions",
    outcome: "Launch-day buzz that actually lands",
    features: ["Trailer campaigns", "Influencer tie-ins", "Meme marketing"],
  },
  {
    icon: Smartphone,
    image: "/services/performance-marketing.jpg",
    category: "Growth",
    title: "Mobile & Email Marketing",
    outcome: "Direct line to your audience",
    features: ["WhatsApp campaigns", "SMS automation", "Email sequences"],
  },
];
const StackCard = ({
  icon: Icon,
  image,
  category,
  title,
  outcome,
  features,
  index,
  total,
  isLast,
}: {
  icon: React.ElementType;
  image: string;
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
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [isLast ? 1 : 0.8, 1]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    isLast ? [1, 1] : [0.6, 1],
  );

  const startX = isLeft ? -120 : 120;
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);

  const rotate = useTransform(scrollYProgress, [0, 1], [isLeft ? -3 : 3, 0]);

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
        className="sticky top-24 sm:top-28 w-full sm:w-[85%] md:w-[75%] mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] sm:min-h-[460px]">
          {/* Background image fills the whole card */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover"
          />

          {/* Dark gradient so text stays readable over any image */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20" />

          {/* Icon badge, top-left */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-dark" />
          </div>

          {/* Index counter, top-right */}
          <span className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 text-light font-mono text-sm sm:text-base bg-surface/40 backdrop-blur-md border border-light/10 rounded-full px-3 py-1">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>

          {/* Glass panel with content, floating at the bottom */}
          <div
            className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl bg-surface-card/40 border border-primary/10"
            style={{
              boxShadow:
                "0 25px 50px -12px var(--color-shadow-dark), inset 0 1px 0 var(--color-shadow-light)",
            }}
          >
            <span className="text-primary/80 text-xs font-mono uppercase tracking-widest border border-primary/30 rounded-full px-3 py-1 mb-4 inline-block">
              {category}
            </span>

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
                  className="text-xs sm:text-sm text-text-muted bg-surface/50 backdrop-blur-sm border border-surface-border rounded-full px-3 py-1.5"
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
    <section id="services" className="relative bg-surface py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, var(--color-primary-wash) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Do
          </span>
          <MagneticText>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Digital Marketing <span className="text-primary">Services</span>
            </h2>
          </MagneticText>
          <p className="text-text-muted text-lg">
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
