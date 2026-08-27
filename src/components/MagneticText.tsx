"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

const MagneticText=({ children }: { children: ReactNode })=> {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();

    // cursor position relative to element center
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    // strength: divide down so it doesn't fly off — tweak 4-8
    setPosition({ x: x / 10, y: y / 10 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 80, damping:15, mass:0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticText