"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { containerVariants, itemVariants } from "@/src/utils/motion";
import MagneticText from "../ui/MagneticText";

const caseStudies = [
  {
    client: "Blacksheep",
    stat: "225%",
    statLabel: "YouTube subscriber growth",
    image: "/work/blacksheep.jpg",
  },
  {
    client: "Salliyargal",
    stat: "1M+",
    statLabel: "Trailer views within 48 hours",
    image: "/work/salliyargal.jpg",
  },
  {
    client: "Ponniyin Selvan 2",
    stat: "Global",
    statLabel: "Influencer campaign across India & Singapore",
    image: "/work/ps2.jpg",
  },
];

const OurWork = () => {
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {caseStudies.map(({ client, stat, statLabel, image }) => (
            <motion.div
              key={client}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden border border-surface-border h-96"
            >
              <Image
                src={image}
                alt={client}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-3xl font-bold mb-1">{stat}</p>
                <p className="text-light font-semibold mb-1">{client}</p>
                <p className="text-text-muted text-sm">{statLabel}</p>
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