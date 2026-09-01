"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemVariants } from "../../utils/motion";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Social Media",
        "Performance Marketing",
        "YouTube Growth",
        "SEO",
        "Web Design",
      ],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy"],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-surface text-light py-16 mt-20 border-t border-surface-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Viral Brainz
            </h2>
            <p className="text-text-faint">
              Building digital experiences that drive visibility, engagement,
              and growth.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-lg text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-text-faint hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div className="border-t border-surface-border my-8" />

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-text-faint">
            © 2024 Viral Brainz. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-4 md:mt-0"
          >
            {["Instagram", "Twitter", "LinkedIn", "Facebook"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                whileTap={{ scale: 0.9 }}
                className="text-text-faint hover:text-primary transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

// const services = [
//   {
//     image: "/services/social-media-management.png",
//     category: "Content",
//     title: "Social Media Management",
//     outcome: "Consistent daily presence, zero guesswork",
//     features: ["Content calendar", "Community management", "Cross-platform posting"],
//   },
//   {
//     image: "/services/performance-marketing.png",
//     category: "Growth",
//     title: "Performance Marketing",
//     outcome: "Every rupee tracked back to ROI",
//     features: ["Meta & Google Ads", "Conversion tracking", "A/B tested creative"],
//   },
//   {
//     image: "/services/youtube.png",
//     category: "Content",
//     title: "YouTube Management",
//     outcome: "From script to monetized channel",
//     features: ["Scripting & production", "SEO optimization", "Analytics reporting"],
//   },
//   {
//     image: "/services/seo.png",
//     category: "Growth",
//     title: "SEO",
//     outcome: "Rank where your customers search",
//     features: ["Technical audits", "Keyword strategy", "Link building"],
//   },
//   {
//     image: "/services/influencer-marketing.png",
//     category: "Content",
//     title: "Influencer Marketing",
//     outcome: "Borrowed trust, real conversions",
//     features: ["Creator matching", "Campaign management", "Performance tracking"],
//   },
//   {
//     image: "/services/website-development.png",
//     category: "Tech",
//     title: "Website Development",
//     outcome: "Built to convert, not just to look good",
//     features: ["Responsive design", "SEO-ready structure", "Fast load times"],
//   },
//   {
//     image: "/services/movie-promotion.png",
//     category: "Growth",
//     title: "Movie Promotions",
//     outcome: "Launch-day buzz that actually lands",
//     features: ["Trailer campaigns", "Influencer tie-ins", "Meme marketing"],
//   },
//   {
//     image: "/services/email-marketing.png",
//     category: "Growth",
//     title: "Mobile & Email Marketing",
//     outcome: "Direct line to your audience",
//     features: ["WhatsApp campaigns", "SMS automation", "Email sequences"],
//   },
// ];
