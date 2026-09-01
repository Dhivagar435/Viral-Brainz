"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/services/seo1.png",
    category: "Growth",
    title: "SEO",
    outcome: "Rank where your customers search",
    description:
      "We optimize your site's technical foundation and content strategy so search engines trust you and customers find you first, not your competitors.",
    features: [
      "Technical Audits",
      "Keyword Strategy",
      "Link Building",
    ],
  },

  {
    image: "/services/social-media-management-1.png",
    category: "Content",
    title: "Social Media Management",
    outcome: "Consistent daily presence, zero guesswork",
    description:
      "We build a consistent social presence with strategic content, creative direction, and community management designed to keep your brand visible.",
    features: [
      "Content Strategy",
      "Community Management",
      "Cross Platform",
    ],
  },

  {
    image: "/services/website-development-1.png",
    category: "Tech",
    title: "Website Development",
    outcome: "Built to convert, not just to look good",
    description:
      "We create fast, responsive, conversion-focused websites that combine strong design with clean development and SEO-ready architecture.",
    features: [
      "Responsive Design",
      "SEO Ready",
      "Fast Performance",
    ],
  },
];

const StackCard = ({
  image,
  category,
  title,
  outcome,
  description,
  features,
  index,
  total,
  progress,
}: {
  image: string;
  category: string;
  title: string;
  outcome: string;
  description: string;
  features: string[];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const springConfig = {
    stiffness: 120,
    damping: 26,
    mass: 0.6,
  };

  const isFirst = index === 0;

  const rawY = useTransform(
    progress,
    isFirst ? [-1, -0.99] : [start, start + 0.5 / total],
    [80, 0],
  );

  const y = useSpring(rawY, springConfig);

  const rawOpacity = useTransform(
    progress,
    isFirst ? [-1, -0.99] : [start, start + 0.3 / total],
    [0, 1],
  );

  const opacity = useSpring(rawOpacity, springConfig);

  const recedeEnd =
    index === total - 1 ? 1.0001 : Math.min(end + 0.6 / total, 1);

  const rawScale = useTransform(progress, [end, recedeEnd], [1, 0.92]);

  const scale = useSpring(rawScale, springConfig);

  const rawDim = useTransform(progress, [end, recedeEnd], [1, 0.5]);

  const dim = useSpring(rawDim, springConfig);

  const brightness = useTransform(dim, (d) => `brightness(${d})`);

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        filter: brightness,
      }}
      className="sticky top-20 sm:top-24 w-full px-4 sm:px-6"
    >
      <div
        className="
          relative
          max-w-6xl
          mx-auto
          min-h-[500px]
          md:min-h-[520px]
          rounded-[28px]
          overflow-hidden
          border
          border-white/10
          bg-[#111111]
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          grid
          grid-cols-1
          md:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            order-2
            md:order-1
            flex
            flex-col
            justify-center
            p-7
            sm:p-9
            md:p-11
            lg:p-14
          "
        >
          {/* NUMBER */}
          <div className="mb-6">
            <span
              className="
                inline-flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                border
                border-white/15
                text-white/40
                text-xs
                font-mono
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* TITLE */}
          <h3
            className="
              text-4xl
              sm:text-5xl
              lg:text-[54px]
              leading-[0.95]
              font-black
              tracking-tight
              uppercase
              text-white
              max-w-xl
            "
          >
            {title}
          </h3>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-6">
            {features.map((feature) => (
              <span
                key={feature}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/15
                  px-4
                  py-2
                  text-xs
                  sm:text-sm
                  text-white/80
                  bg-white/[0.02]
                "
              >
                {feature}
              </span>
            ))}
          </div>

          {/* OUTCOME */}
          <p
            className="
              mt-7
              text-base
              sm:text-lg
              font-medium
              text-primary
              max-w-lg
            "
          >
            {outcome}
          </p>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-sm
              sm:text-base
              leading-7
              text-white/50
              max-w-lg
            "
          >
            {description}
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <Link
              href="/services"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-white/15
                px-6
                py-3
                text-sm
                sm:text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              <span>Discover More</span>

              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-full
                  border
                  border-white/20
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:border-black/20
                "
              >
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            order-1
            md:order-2
            relative
            min-h-[280px]
            sm:min-h-[340px]
            md:min-h-full
            p-4
            sm:p-5
            md:p-6
          "
        >
          <div
            className="
              relative
              h-full
              min-h-[250px]
              sm:min-h-[310px]
              md:min-h-full
              overflow-hidden
              rounded-2xl
              sm:rounded-[20px]
            "
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/5
                transition-colors
                duration-500
                hover:bg-black/0
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // heading zoom scroll tracker
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center", "end start"],
  });
  const headingScale = useTransform(
    headingProgress,
    [0, 0.5, 1],
    [0.5, 1.2, 0.6],
  );
  const headingOpacity = useTransform(headingProgress, [0, 0.5, 1], [0, 1, 0]);
  const smoothScale = useSpring(headingScale, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const smoothOpacity = useSpring(headingOpacity, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  // card stacking scroll tracker (this is the one StackCard needs)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="relative bg-surface py-28 sm:py-32 overflow-hidden">
      {/* ... */}
      <motion.div
        ref={headingRef}
        style={{ scale: smoothScale, opacity: smoothOpacity }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-light mb-4">
          SERVICES
        </h2>
      </motion.div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${services.length * 75}vh` }}
      >
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
    </section>
  );
};

export default Services;
