"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Blacksheep", logo: "/clients/client-1.webp" },
  { name: "Salliyargal", logo: "/clients/client-2.webp" },
  { name: "Ponniyin Selvan 2", logo: "/clients/client-3.webp" },
  { name: "Ariyavan", logo: "/clients/client-4.webp" },
];

const Clients = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const loopedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="relative bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light">
            Brands We&apos;ve Worked With
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center"
          animate={mounted ? { x: ["0%", "-50%"] } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {loopedClients.map((client, i) => (
            <div
              key={i}
              className="relative shrink-0 w-24 h-24 rounded-full bg-white border border-surface-border flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-14 h-14">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;