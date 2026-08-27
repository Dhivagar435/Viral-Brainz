"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Search, Code2, Palette, BarChart3 } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const icons = [
  { Icon: FaInstagram, label: "Social Media", top: "10%", left: "8%", delay: 0, duration: 4 },
  { Icon: TrendingUp, label: "Performance Marketing", top: "20%", left: "85%", delay: 0.5, duration: 5 },
  { Icon: FaYoutube, label: "YouTube Growth", top: "70%", left: "5%", delay: 1, duration: 4.5 },
  { Icon: Users, label: "Influencer Campaigns", top: "80%", left: "88%", delay: 1.5, duration: 5.5 },
  { Icon: Search, label: "SEO", top: "15%", left: "45%", delay: 0.8, duration: 4 },
  { Icon: Code2, label: "Website Development", top: "60%", left: "92%", delay: 1.2, duration: 5 },
  { Icon: Palette, label: "Branding", top: "85%", left: "40%", delay: 0.3, duration: 4.8 },
  { Icon: BarChart3, label: "Sales Growth", top: "40%", left: "3%", delay: 0.6, duration: 4.2 },
];

const FloatingIcons=()=> {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {icons.map(({ Icon, label, top, left, delay, duration }, i) => (
        <motion.div
          key={label}
          className="absolute group pointer-events-auto"
          style={{ top, left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: delay * 0.5 },
            scale: { duration: 0.5, delay: delay * 0.5, type: "spring" },
            y: { duration, repeat: Infinity, delay, ease: "easeInOut" },
            rotate: { duration, repeat: Infinity, delay, ease: "easeInOut" },
          }}
        >
          {/* glow ring behind the chip */}
          <div className="absolute inset-0 rounded-2xl bg-primary blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

          <motion.div
            whileHover={{ scale: 1.15, borderColor: "#FDB913" }}
            className="relative bg-light/5 backdrop-blur-md border border-primary/30 rounded-2xl p-3 shadow-[0_0_20px_rgba(253,185,19,0.15)]"
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>

          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-light bg-dark border border-primary/30 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingIcons