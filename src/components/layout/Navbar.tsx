"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { containerVariants, itemVariants } from "../../utils/motion";

type NavLink =
  | { name: string; type: "page"; href: string }
  | { name: string; type: "anchor"; href: string; id: string };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // "page" = its own route (app/<slug>/page.tsx). "anchor" = scrolls to a
  // section id on the homepage only.
  const navLinks: NavLink[] = [
    { name: "Home", href: "/#home", type: "anchor", id: "home" },
    { name: "About Us", href: "/about-us", type: "page" },
    { name: "Services", href: "/services", type: "page" },
    { name: "Why Choose Us", href: "/#why-us", type: "anchor", id: "why-us" },
    { name: "Our Works", href: "/our-works", type: "page" },
    { name: "Blog", href: "/blog", type: "page" },
    { name: "Contact", href: "/#contact", type: "anchor", id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only observe anchor sections, and only while sitting on the homepage —
  // other routes have no matching section ids to scroll-spy.
  useEffect(() => {
    if (pathname !== "/") return;

    const anchorLinks = navLinks.filter(
      (link): link is Extract<NavLink, { type: "anchor" }> =>
        link.type === "anchor"
    );
    const sections = anchorLinks
      .map((link) => document.getElementById(link.id))
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
  }, [pathname]);

  const isLinkActive = (link: NavLink) =>
    link.type === "page"
      ? pathname === link.href
      : pathname === "/" && activeSection === link.id;

  const renderLinks = (variant: "desktop" | "mobile") =>
    navLinks.map((link) => {
      const active = isLinkActive(link);
      return (
        <motion.div
          key={link.name}
          variants={itemVariants}
          className="relative"
        >
          <Link
            href={link.href}
            onClick={variant === "mobile" ? () => setIsOpen(false) : undefined}
            className={
              variant === "desktop"
                ? `relative z-10 block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-colors duration-300 ${active ? "text-dark" : "text-text-muted hover:text-primary"
                }`
                : `text-3xl font-bold transition-colors ${active ? "text-primary" : "text-light hover:text-primary"
                }`
            }
          >
            {link.name}
          </Link>

          {variant === "desktop" && active && (
            <motion.div
              layoutId="activeNavPill"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </motion.div>
      );
    });

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-surface-border shadow-lg"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/#home" aria-label="Viral Brainz home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0"
              >
                <Image
                  src="/logo/viral-brainz-logo.png"
                  alt="Viral Brainz"
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </Link>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-1 lg:gap-2 items-center bg-surface-card border border-surface-border rounded-full px-2 py-2"
            >
              {renderLinks("desktop")}
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-primary-hover)",
                boxShadow: "0 8px 25px var(--color-primary-soft)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-primary text-dark px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm rounded-full font-semibold transition-all"
            >
              Get in Touch
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
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/logo/viral-brainz-logo  .png"
                  alt="Viral Brainz"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
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
              {renderLinks("mobile")}
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