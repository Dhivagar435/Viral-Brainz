// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { services } from "../data/service";
// import { cardVariants, containerVariants } from "../../utils/motion";



// const ServicesGrid = () => {
//   return (
//     <section className="relative bg-surface py-16 sm:py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.title}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="group bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors duration-300"
//             >
//               <div className="relative w-full h-48 sm:h-52 overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-text-muted text-sm leading-relaxed mb-4">
//                   {service.description}
//                 </p>
//                 <ul className="space-y-1.5">
//                   {service.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-center gap-2 text-xs text-text-faint"
//                     >
//                       <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;


"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "../data/service";


const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesGrid = () => {
  return (
    <section className="relative bg-surface py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              <Link href={`/services/${service.slug}`}>
                <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-text-faint"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;