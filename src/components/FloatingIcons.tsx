"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Search, Code2, Palette, BarChart3, Zap } from "lucide-react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { ComponentType, SVGProps } from "react";

// Define proper types
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconData {
  Icon: IconComponent;
  label: string;
  top: string;
  right: string;
  delay: number;
  duration: number;
}

interface IconCardProps {
  Icon: IconComponent;
  label: string;
  top: string;
  right: string;
  delay: number;
  duration: number;
}

const FloatingIcons = () => {
  // Marketing agency focused icons with responsive positions
  const getIconsData = () => {
    // Desktop (1280px+): 8 icons scattered around image - FIXED POSITIONS
    const desktopIcons: IconData[] = [
      // Top right cluster
      // { Icon: FaInstagram, label: "Social Media Marketing", top: "20%", right: "43%", delay: 0, duration: 4 },

      { Icon: FaInstagram, label: "Social Media Marketing", top: "20%", right: "3%", delay: 0.3, duration: 4.2 },


      
      // Middle right cluster
      { Icon: FaYoutube, label: "YouTube Growth Strategy", top: "60%", right: "3%", delay: 1, duration: 4.5 },

      { Icon: TrendingUp, label: "Paid Ads & PPC", top: "92%", right: "28%", delay: 0.5, duration: 5 },


      
      // Bottom right cluster
      { Icon: Search, label: "SEO & Content", top: "88%", right: "17%", delay: 1.5, duration: 5.5 },

      { Icon: Users, label: "Influencer Campaigns", top: "75%", right: "8%", delay: 1.8, duration: 5.2 },
      
      // Far right side
      { Icon: BarChart3, label: "Analytics & Reporting", top: "40%", right: "1%", delay: 0.8, duration: 4.8 },

      // { Icon: Zap, label: "Growth Hacking", top: "10%", right: "8%", delay: 1.2, duration: 5.1 },


    ];

    return { desktopIcons };
  };

  const { desktopIcons } = getIconsData();

  // Reusable icon component with proper types
  const IconCard = ({ Icon, label, top, right, delay, duration }: IconCardProps) => (
    <motion.div
      className="absolute group pointer-events-auto"
      style={{ top, right }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.5, delay: delay * 0.5 },
        scale: { duration: 0.5, delay: delay * 0.5, type: "spring" },
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration, repeat: Infinity, delay, ease: "easeInOut" } }}
        className="relative bg-light/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-3 shadow-lg"
        style={{ willChange: "transform" }}
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>

      <span className="absolute -bottom-10 right-0 text-xs font-medium text-light bg-dark/80 border border-primary/30 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
        {label}
      </span>
    </motion.div>
  );

  return (
    <>
      {/* Desktop Version: lg:block (1024px+) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {desktopIcons.map(({ Icon, label, top, right, delay, duration }) => (
          <IconCard
            key={label}
            Icon={Icon}
            label={label}
            top={top}
            right={right}
            delay={delay}
            duration={duration}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingIcons;