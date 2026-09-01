"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="relative bg-surface py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--color-primary-wash) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-surface-card border border-surface-border rounded-3xl px-8 py-16 sm:px-16 sm:py-20"
        >
          <span className="inline-block bg-surface border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Let&apos;s Build Something Extraordinary
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-6 leading-tight">
            Start Your Digital Growth <span className="text-primary">Journey Today</span>
          </h2>

          <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re launching a new brand or scaling an existing
            one, Viral Brainz is ready to help you grow.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors duration-300"
          >
            Get In Touch
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;