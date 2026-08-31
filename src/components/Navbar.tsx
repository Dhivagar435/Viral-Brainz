"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { containerVariants, itemVariants } from "../utils/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-surface-border shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl md:text-3xl font-bold text-light"
            >
              Viral <span className="text-primary">Brainz</span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-2 items-center bg-surface-card border border-surface-border rounded-full px-2 py-2"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div key={link.name} variants={itemVariants} className="relative">
                    <Link
                      href={link.href}
                      className={`relative z-10 block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-dark" : "text-text-muted hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>

                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-primary-hover)",
                boxShadow: "0 8px 25px var(--color-primary-soft)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary text-dark px-6 py-2.5 rounded-full font-semibold transition-all"
            >
              Get Started
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="md:hidden text-light"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-between items-center px-6 pt-6">
              <div className="text-2xl font-bold text-light">
                Viral <span className="text-primary">Brainz</span>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-light"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </motion.button>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center justify-center gap-8 h-[75%]"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-light hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                variants={itemVariants}
                onClick={() => setIsOpen(false)}
                whileHover={{ backgroundColor: "var(--color-primary-hover)" }}
                className="bg-primary text-dark px-8 py-3 rounded-full font-semibold text-lg mt-4"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;