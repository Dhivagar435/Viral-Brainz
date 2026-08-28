"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Search, BarChart3 } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconData {
  Icon: IconComponent;
  label: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

// points spread around the circle — top/left percentages, both sides used
// (this is what was missing before — everything was "right" only)
const icons: IconData[] = [
  { Icon: FaInstagram, label: "Social Media", top: "4%", left: "78%", delay: 0.3, duration: 4.2 },
  { Icon: FaYoutube, label: "YouTube Growth", top: "50%", left: "95%", delay: 1, duration: 4.5 },
  { Icon: TrendingUp, label: "Paid Ads", top: "84%", left: "76%", delay: 0.5, duration: 5 },   // moved up + right
  { Icon: Search, label: "SEO", top: "95%", left: "35%", delay: 1.5, duration: 5.5 },           // moved up + right, away from badge corner
  { Icon: Users, label: "Influencer Campaigns", top: "50%", left: "-2%", delay: 1.8, duration: 5.2 },
  { Icon: BarChart3, label: "Analytics", top: "4%", left: "22%", delay: 0.8, duration: 4.8 },
];

const IconCard = ({ Icon, label, top, left, delay, duration }: IconData) => (
  <motion.div
    className="absolute group pointer-events-auto z-20"
    style={{ top, left, transform: "translate(-50%, -50%)" }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      opacity: { duration: 0.5, delay: delay * 0.5 },
      scale: { duration: 0.5, delay: delay * 0.5, type: "spring" },
    }}
  >
    <motion.div
      whileHover={{ scale: 1.2 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ y: { duration, repeat: Infinity, delay, ease: "easeInOut" } }}
      className="relative bg-light/5 backdrop-blur-sm border border-primary/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg"
      style={{ willChange: "transform" }}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
    </motion.div>

    <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs font-medium text-light bg-dark/80 border border-primary/30 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
      {label}
    </span>
  </motion.div>
);

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {icons.map((icon) => (
        <IconCard key={icon.label} {...icon} />
      ))}
    </div>
  );
};

export default FloatingIcons;