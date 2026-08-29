"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemVariants } from "../utils/motion";

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
      className="bg-dark-900 text-light py-16 mt-20 border-t border-dark-700"
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
            <p className="text-light-40">
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
                      className="text-light-40 hover:text-primary transition-colors"
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
        <motion.div className="border-t border-dark-700 my-8" />

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-light-40">
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
                whileHover={{ scale: 1.2, color: "#FDB913" }}
                whileTap={{ scale: 0.9 }}
                className="text-light-40 hover:text-primary transition-colors"
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