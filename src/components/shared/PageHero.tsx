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
        <section className={cn("relative pt-44 pb-32 bg-background overflow-hidden text-[#050918] text-center", className)}>
            {/* Immersive Background Image */}
            {image && (
                <div className="absolute inset-0 z-0 opacity-10">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover object-center scale-105"
                    />
                </div>
            )}

            {/* Glowing atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#1b18ff]/10 to-transparent blur-[120px] z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2 mb-10 text-[10px] font-black tracking-[0.4em] text-[#1b18ff] uppercase bg-[#1b18ff]/5 border border-[#1b18ff]/10 rounded-full backdrop-blur-xl"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1b18ff]" />
                        {badge}
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-[#050918] mb-8"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
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
