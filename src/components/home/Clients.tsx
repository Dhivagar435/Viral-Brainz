"use client";

import { motion } from "framer-motion";

// swap these with actual client logo files once you have them
const clients = [
  { name: "Blacksheep", logo: "/clients/blacksheep.jpg" },
  { name: "Salliyargal", logo: "/about/team-2.jpg" },
  { name: "Ponniyin Selvan 2", logo: "/clients/blacksheep.jpg" },
  { name: "Ariyavan", logo: "/about/team-1.jpg" },
];

const Clients = () => {
  // duplicate the array so the marquee loops seamlessly
  const loopedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="relative bg-surface py-20 overflow-hidden">
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

      {/* full-bleed marquee, edges fade out */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {loopedClients.map((client, i) => (
            <div
              key={i}
              className="shrink-0 w-40 h-24 rounded-xl bg-light flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
