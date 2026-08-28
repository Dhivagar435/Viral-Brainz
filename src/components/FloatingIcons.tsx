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
    // Tablet (768px - 1023px): 3-4 icons, closer to center
    const tabletIcons: IconData[] = [
      { Icon: FaInstagram, label: "Social Media", top: "15%", right: "12%", delay: 0.3, duration: 4.2 },
      { Icon: FaYoutube, label: "YouTube Growth", top: "60%", right: "10%", delay: 1, duration: 4.5 },
      { Icon: TrendingUp, label: "Performance Ads", top: "80%", right: "20%", delay: 0.5, duration: 5 },
      { Icon: Search, label: "SEO & Content", top: "88%", right: "30%", delay: 1.5, duration: 5.5 },
    ];

    // Laptop (1024px - 1279px): 6 icons, ADJUSTED RIGHT VALUES
    const laptopIcons: IconData[] = [
      { Icon: FaInstagram, label: "Social Media Marketing", top: "20%", right: "8%", delay: 0.3, duration: 4.2 },
      { Icon: FaYoutube, label: "YouTube Growth Strategy", top: "60%", right: "8%", delay: 1, duration: 4.5 },
      { Icon: TrendingUp, label: "Paid Ads & PPC", top: "92%", right: "35%", delay: 0.5, duration: 5 },
      { Icon: Search, label: "SEO & Content", top: "88%", right: "25%", delay: 1.5, duration: 5.5 },
      { Icon: Users, label: "Influencer Campaigns", top: "75%", right: "15%", delay: 1.8, duration: 5.2 },
      { Icon: BarChart3, label: "Analytics & Reporting", top: "40%", right: "5%", delay: 0.8, duration: 4.8 },
    ];

    // Desktop (1280px+): 6 icons, FAR RIGHT
    const desktopIcons: IconData[] = [
      { Icon: FaInstagram, label: "Social Media Marketing", top: "20%", right: "3%", delay: 0.3, duration: 4.2 },
      { Icon: FaYoutube, label: "YouTube Growth Strategy", top: "60%", right: "3%", delay: 1, duration: 4.5 },
      { Icon: TrendingUp, label: "Paid Ads & PPC", top: "92%", right: "28%", delay: 0.5, duration: 5 },
      { Icon: Search, label: "SEO & Content", top: "88%", right: "17%", delay: 1.5, duration: 5.5 },
      { Icon: Users, label: "Influencer Campaigns", top: "75%", right: "8%", delay: 1.8, duration: 5.2 },
      { Icon: BarChart3, label: "Analytics & Reporting", top: "40%", right: "1%", delay: 0.8, duration: 4.8 },
    ];

    return { tabletIcons, laptopIcons, desktopIcons };
  };

  const { tabletIcons, laptopIcons, desktopIcons } = getIconsData();

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
      {/* Tablet Version: md:block lg:hidden (768px - 1023px) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block lg:hidden">
        {tabletIcons.map(({ Icon, label, top, right, delay, duration }) => (
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

      {/* Laptop Version: lg:block xl:hidden (1024px - 1279px) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block xl:hidden">
        {laptopIcons.map(({ Icon, label, top, right, delay, duration }) => (
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

      {/* Desktop Version: xl:block (1280px+) */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
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