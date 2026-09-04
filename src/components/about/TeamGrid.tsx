"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { containerVariants } from "../../utils/motion";
import { motion, Variants } from "framer-motion";

const team = [
    { name: "Team Member 1", role: "Founder & Strategy Lead", photo: "/team/member-1.jpg" },
    { name: "Team Member 2", role: "Creative Director", photo: "/team/member-2.jpg" },
    { name: "Team Member 3", role: "Performance Marketing Lead", photo: "/team/member-3.jpg" },
    { name: "Team Member 4", role: "Content & Social Strategist", photo: "/team/member-4.jpg" },
];



const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const TeamGrid = () => {
    return (
        <section className="relative bg-dark py-20 sm:py-24 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 80% 10%, var(--color-primary-wash) 0%, transparent 50%)",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
                >
                    <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        Our Team
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light">
                        The people behind the <span className="text-primary">work</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative rounded-2xl overflow-hidden border border-surface-border bg-surface-card"
                        >
                            <div className="relative w-full aspect-[3/4]">
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                                    <h3 className="text-light font-bold text-sm sm:text-base">
                                        {member.name}
                                    </h3>
                                    <p className="text-text-muted text-xs sm:text-sm mb-2">
                                        {member.role}
                                    </p>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="w-7 h-7 rounded-full bg-surface-card border border-surface-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors">
                                            <FaLinkedin className="w-3.5 h-3.5" />
                                        </span>
                                        <span className="w-7 h-7 rounded-full bg-surface-card border border-surface-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors">
                                            <FaInstagram className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamGrid;