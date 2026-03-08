"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    badge?: string;
    title: ReactNode;
    subtitle?: string;
    image?: string;
    children?: ReactNode;
    className?: string;
}

export function PageHero({ badge, title, subtitle, image, children, className }: PageHeroProps) {
    return (
        <section className={cn("relative pt-44 pb-32 bg-[#050918] overflow-hidden text-white text-center", className)}>
            {/* Immersive Background Image */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover object-center opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050918] via-transparent to-[#050918]" />
                    <div className="absolute inset-0 bg-[#2F3BFF]/5 mix-blend-overlay" />
                </div>
            )}

            {/* Glowing atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#2F3BFF]/10 to-transparent blur-[120px] z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2 mb-10 text-[10px] font-black tracking-[0.4em] text-[#6B7FFF] uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-xl"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F3BFF]" />
                        {badge}
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white mb-8"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-12"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
