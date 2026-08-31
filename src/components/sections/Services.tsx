"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticText from "../MagneticText";

const services = [
  {
    image: "/services/seo1.png",
    category: "Growth",
    title: "SEO",
    outcome: "Rank where your customers search",
    features: ["Technical audits", "Keyword strategy", "Link building"],
  },
  {
    image: "/services/social-media-management-1.png",
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
    image: "/services/website-development-1.png",
    category: "Tech",
    title: "Website Development",
    outcome: "Built to convert, not just to look good",
    features: ["Responsive design", "SEO-ready structure", "Fast load times"],
  },
];

const StackCard = ({
  image,
  category,
  title,
  outcome,
  features,
  index,
  total,
  progress,
}: {
  image: string;
  category: string;
  title: string;
  outcome: string;
  features: string[];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // each card "owns" a slice of the total scroll: [start, end]
  const start = index / total;
  const end = (index + 1) / total;

  const springConfig = { stiffness: 120, damping: 26, mass: 0.6 };

  // first card is already visible on load — skip its entrance animation to avoid a blank gap
  const isFirst = index === 0;

  const rawY = useTransform(
    progress,
    isFirst ? [-1, -0.99] : [start, start + 0.5 / total],
    [80, 0]
  );
  const y = useSpring(rawY, springConfig);

  const rawOpacity = useTransform(
    progress,
    isFirst ? [-1, -0.99] : [start, start + 0.3 / total],
    [0, 1]
  );
  const opacity = useSpring(rawOpacity, springConfig);

  // last card has no next card to recede under — give it a range that can never be reached
  const recedeEnd = index === total - 1 ? 1.0001 : Math.min(end + 0.6 / total, 1);

  // once the NEXT card's slice begins, this card shrinks + dims to "recede" under it
  const rawScale = useTransform(progress, [end, recedeEnd], [1, 0.92]);
  const scale = useSpring(rawScale, springConfig);

  const rawDim = useTransform(progress, [end, recedeEnd], [1, 0.5]);
  const dim = useSpring(rawDim, springConfig);

  return (
    <motion.div
      style={{ y, opacity, scale, zIndex: index, filter: useTransform(dim, (d) => `brightness(${d})`) }}
      className="sticky top-20 sm:top-24 w-full"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-card border border-surface-border grid grid-cols-1 md:grid-cols-2 min-h-[480px] max-w-5xl mx-auto">
        <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 order-2 md:order-1">
          <span className="text-primary text-xs font-mono uppercase tracking-widest border border-primary/30 rounded-full px-3 py-1 mb-5 inline-block w-fit">
            {category}
          </span>
          <span className="text-text-faint font-mono text-sm mb-3">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-light mb-3">{title}</h3>
          <p className="text-primary/90 text-base font-medium mb-6">{outcome}</p>
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="text-sm text-text-muted bg-surface border border-surface-border rounded-full px-3 py-1.5"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] md:min-h-full order-1 md:order-2">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-surface-card/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
          <p className="text-text-muted text-lg">A few of the ways we grow your brand.</p>
        </motion.div>

        {/* one tall container = total scroll distance for all cards combined */}
        <div ref={containerRef} className="relative" style={{ height: `${services.length * 80}vh` }}>
          {services.map((service, index) => (
            <StackCard
              key={service.title}
              {...service}
              index={index}
              total={services.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8 relative z-20"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors duration-300"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;