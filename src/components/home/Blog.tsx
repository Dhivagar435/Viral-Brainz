"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticText from "../ui/MagneticText";

const posts = [
  {
    category: "SEO Tips",
    title: "5 SEO Fundamentals Every Brand Should Get Right in 2026",
    date: "Coming Soon",
  },
  {
    category: "Social Media Trends",
    title: "What's Actually Working on Social Media Right Now",
    date: "Coming Soon",
  },
  {
    category: "Influencer Marketing",
    title: "How to Choose the Right Influencer for Your Brand",
    date: "Coming Soon",
  },
];

const BlogRow = ({
  category,
  title,
  date,
  index,
}: {
  category: string;
  title: string;
  date: string;
  index: number;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const fromX = index % 2 === 0 ? -100 : 100;
  const rawX = useTransform(scrollYProgress, [0, 0.45, 1], [fromX, 0, 0]);
  const x = useSpring(rawX, { stiffness: 110, damping: 22, mass: 0.6 });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 110, damping: 22 });

  return (
    <motion.div
      ref={rowRef}
      style={{ x, opacity }}
      className="group relative rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(253,185,19,0.35)]"
    >
      {/* fill sweep — pure CSS, driven by the SAME group-hover as the text */}
      <div
        className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundColor: "#FDB913" }}
      />

      <Link
        href="/blog"
        className="relative z-10 flex items-center gap-6 sm:gap-10 py-8 sm:py-10 px-2 sm:px-4"
      >
        <span className="text-2xl sm:text-3xl font-mono text-text-faint w-10 sm:w-14 shrink-0 group-hover:text-black/50 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <span className="inline-block text-primary group-hover:text-black/70 text-xs font-mono uppercase tracking-widest mb-2 transition-colors duration-300">
            {category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-light group-hover:text-black transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="hidden sm:flex flex-col items-end shrink-0 gap-3">
          <span className="text-text-faint group-hover:text-black/60 text-sm transition-colors duration-300">
            {date}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border group-hover:border-black/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-light group-hover:text-black transition-colors duration-300" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="relative bg-surface py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, var(--color-primary-wash) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Blog
          </span>
          <MagneticText>
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
          </MagneticText>
          <p className="text-text-muted text-lg">
            Ideas and strategy from the team behind the growth.
          </p>
        </motion.div>
        <div className="flex flex-col gap-4 mb-12">
          {posts.map((post, index) => (
            <BlogRow key={post.title} index={index} {...post} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-full border border-primary bg-primary px-5 py-1.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold text-dark shadow-[0_0_25px_var(--color-primary-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-tint hover:shadow-[0_0_35px_var(--color-primary-glow)]"
          >
            Read All Insights
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
