"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { containerVariants, itemVariants } from "@/src/utils/motion";
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {posts.map(({ category, title, date }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300 flex flex-col"
            >
              <span className="inline-block text-primary text-xs font-mono uppercase tracking-widest border border-primary/30 rounded-full px-3 py-1 mb-5 w-fit">
                {category}
              </span>

              <h3 className="text-xl font-bold text-light mb-4 leading-snug flex-1">
                {title}
              </h3>

              <div className="flex items-center gap-2 text-text-faint text-sm">
                <Calendar className="w-4 h-4" />
                {date}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors duration-300"
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