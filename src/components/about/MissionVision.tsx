// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Lightbulb, Eye, Sparkles, Shield, Target, Users2 } from "lucide-react";
// import { containerVariants, itemVariants } from "@/src/utils/motion";
// import MagneticText from "../MagneticText";

// const values = [
//   { icon: Lightbulb, label: "Innovation" },
//   { icon: Sparkles, label: "Creativity" },
//   { icon: Shield, label: "Transparency" },
//   { icon: Target, label: "Results" },
//   { icon: Users2, label: "Collaboration" },
// ];

// const AboutUs = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const glowY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

//   return (
//     <section
//       ref={sectionRef}
//       id="about-us"
//       className="relative bg-surface py-24 overflow-hidden"
//     >
//       <motion.div style={{ y: glowY }} className="absolute inset-0">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 15% 30%, var(--color-primary-wash) 0%, transparent 50%)",
//           }}
//         />
//       </motion.div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//             About Us
//           </span>
//           <MagneticText>
//             <h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
//               About <span className="text-primary">Viral Brainz</span>
//             </h2>
//           </MagneticText>
//           <p className="text-text-muted text-lg leading-relaxed mb-4">
//             Digital marketing isn&apos;t just about getting noticed, it&apos;s
//             about building meaningful connections that translate into
//             business growth.
//           </p>
//           <p className="text-text-muted leading-relaxed mb-4">
//             Viral Brainz is a full-service digital marketing agency helping
//             brands strengthen their online presence through strategic
//             marketing, compelling content, and performance-driven campaigns.
//           </p>
//           <p className="text-text-muted leading-relaxed">
//             Our experienced team combines creativity, technology, and
//             analytics to deliver campaigns that increase visibility,
//             engagement, and revenue. From startups to established enterprises
//             and entertainment brands, we&apos;ve partnered with businesses
//             across industries to create impactful digital success stories.
//           </p>
//         </motion.div>

//         {/* Mission / Vision */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
//         >
//           <motion.div
//             variants={itemVariants}
//             whileHover={{ y: -6 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
//           >
//             <motion.div
//               whileHover={{ rotate: 12, scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-5"
//             >
//               <Target className="w-6 h-6 text-primary" />
//             </motion.div>
//             <h3 className="text-2xl font-bold text-light mb-3">Our Mission</h3>
//             <p className="text-text-muted leading-relaxed">
//               To empower brands with innovative digital strategies that
//               inspire audiences and deliver measurable growth.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             whileHover={{ y: -6 }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
//           >
//             <motion.div
//               whileHover={{ rotate: 12, scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-5"
//             >
//               <Eye className="w-6 h-6 text-primary" />
//             </motion.div>
//             <h3 className="text-2xl font-bold text-light mb-3">Our Vision</h3>
//             <p className="text-text-muted leading-relaxed">
//               To become one of India&apos;s most trusted digital growth
//               partners by consistently delivering creativity, performance,
//               and measurable business success.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Values */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-center text-2xl font-bold text-light mb-10">
//             Our <span className="text-primary">Values</span>
//           </h3>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {values.map(({ icon: Icon, label }) => (
//               <motion.div
//                 key={label}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.08, y: -4 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 15 }}
//                 className="group flex items-center gap-3 bg-surface-card border border-surface-border rounded-full px-6 py-3 hover:border-primary/40 hover:bg-primary-wash transition-colors duration-300"
//               >
//                 <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
//                   <Icon className="w-5 h-5 text-primary" />
//                 </motion.div>
//                 <span className="text-light font-medium">{label}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;