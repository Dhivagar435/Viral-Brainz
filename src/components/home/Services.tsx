"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import DepthText from "../ui/DeepthText";

interface ServiceItem {
  image: string;
  label: string;
  description: string;
  link: string;
  size: "small" | "large" | "wide";
}

const services: ServiceItem[] = [
  { image: "/services/seo.jpg", label: "SEO", description: "Rank where your customers search", link: "/services", size: "large" },
  { image: "/services/social-media-management.jpg", label: "Social Media Management", description: "Consistent presence, zero guesswork", link: "/services", size: "small" },
  { image: "/services/website-development.jpg", label: "Website Development", description: "Built to convert, not just look good", link: "/services", size: "small" },
  { image: "/services/youtube-growth.jpg", label: "Youtube Growth", description: "Grow subscribers that actually watch", link: "/services", size: "wide" },
];

const BentoTile = ({
  image,
  label,
  description,
  link,
  size,
  index,
}: ServiceItem & { index: number }) => {
  const tileRef = useRef<HTMLDivElement>(null);

  const spanClass =
    size === "large"
      ? "md:col-span-2 md:row-span-2"
      : size === "wide"
      ? "md:col-span-2 md:row-span-1"
      : "md:col-span-1 md:row-span-1";

  const heightClass = size === "large" ? "h-[340px] md:h-full" : "h-[220px] md:h-full";

  // scroll progress specific to this tile: 0 = entering bottom of viewport, 1 = exiting top
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });

  // alternate entrance side: even index from left, odd index from right
  const fromX = index % 2 === 0 ? -120 : 120;
  const rawX = useTransform(scrollYProgress, [0, 0.45, 1], [fromX, 0, 0]);
  const x = useSpring(rawX, { stiffness: 110, damping: 22, mass: 0.6 });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 110, damping: 22 });

  // subtle image parallax drift while the tile is in view
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-24, 24]),
    { stiffness: 100, damping: 24, mass: 0.6 }
  );

  return (
    <motion.div
      ref={tileRef}
      style={{ x, opacity }}
      className={`group relative overflow-hidden rounded-3xl border border-surface-border ${spanClass} ${heightClass}`}
    >
      <Link href={link} className="absolute inset-0 block">
        <motion.div
          className="absolute -inset-y-6 inset-x-0"
          style={{ y: imageY }}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image}
              alt={label}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-light mb-1 group-hover:text-primary transition-colors duration-300">
                {label}
              </h3>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="text-text-muted text-sm overflow-hidden"
              >
                {description}
              </motion.p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-light opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <span className="absolute top-5 left-5 text-xs font-mono text-white/60 border border-white/15 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative bg-surface py-28 sm:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once:false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center mb-16"
      >
        <DepthText
          text="SERVICES"
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
          fontSize="clamp(3rem, 12vw, 7rem)"
          fontWeight={900}
          shadow
        />
      </motion.div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-5">
          {services.map((service, index) => (
            <BentoTile key={service.label} {...service} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-8 py-4 text-base font-bold text-dark shadow-[0_0_25px_var(--color-primary-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-[0_0_35px_var(--color-primary-glow)]"
          >
            <span>View All Services</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-primary transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;