"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { TrendingUp, Users, Trophy, Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from "@/src/utils/motion";
import MagneticText from "../MagneticText";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const stats = [
    { icon: FaInstagram, value: 225, suffix: "%", label: "YouTube subscriber growth for Blacksheep" },
    { icon: TrendingUp, value: 1, suffix: "M+", label: "Trailer views within 48 hours" },
    { icon: FaTwitter, value: 1, prefix: "No.", suffix: "", label: "Twitter trends achieved" },
    { icon: Users, value: 15, suffix: "+", label: "YouTube channels built" },
    { icon: Trophy, value: 10, suffix: "+", label: "Years of combined growth expertise" },
    { icon: Sparkles, value: 100, suffix: "+", label: "Successful campaigns across India & Singapore" },
];

const Counter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const Results = () => {
    return (
        <section id="results" className="relative bg-surface py-24 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 50% 0%, var(--color-primary-wash) 0%, transparent 60%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block bg-surface-card border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        Results
                    </span>
                    <MagneticText>
                        <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
                            Numbers That <span className="text-primary">Speak</span>
                        </h2>
                    </MagneticText>
                    <p className="text-text-muted text-lg">
                        Real results, driven by strategy and creative that performs.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {stats.map(({ icon: Icon, value, prefix, suffix, label }) => (
                        <motion.div
                            key={label}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-surface-card border border-surface-border rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-5">
                                <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-4xl font-bold text-primary mb-2">
                                <Counter value={value} prefix={prefix} suffix={suffix} />
                            </p>
                            <p className="text-text-muted leading-relaxed">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Results;