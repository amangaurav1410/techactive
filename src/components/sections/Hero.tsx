"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GradientButton } from "@/components/shared/GradientButton";
import Link from "next/link";
import { Shield, Zap, TrendingUp, ArrowRight, Globe, Code2, BarChart2, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const words = ["Secure.", "Transform.", "Scale."];

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentWord, setCurrentWord] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prev => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#050918]">
            {/* High-Impact Immersive Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                <img
                    src="/img-hero-cybersec.png"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-40 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050918] via-[#050918]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050918] via-transparent to-transparent" />
            </motion.div>

            {/* Glowing Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F3BFF]/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <motion.div style={{ y: textY, opacity }} className="max-w-4xl space-y-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#2F3BFF] animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">Enterprise OS 2.0</span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter"
                        >
                            ENGINEER <br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWord}
                                    initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(12px)" }}
                                    transition={{ duration: 0.6 }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F3BFF] to-[#6B7FFF]"
                                >
                                    {words[currentWord].toUpperCase()}
                                </motion.span>
                            </AnimatePresence>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.35 }}
                            className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl pt-4"
                        >
                            We provide the critical technical infrastructure for teams building the future. High-velocity engineering for a high-growth world.
                        </motion.p>
                    </div>

                    {/* Service Micro-Chips */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        {[
                            { icon: Shield, name: "Infosec" },
                            { icon: Code2, name: "Engineering" },
                            { icon: Globe, name: "Cloud" },
                            { icon: BarChart2, name: "Growth" }
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-black text-white uppercase tracking-widest cursor-default hover:bg-white/10 transition-all">
                                <s.icon className="w-3.5 h-3.5 text-[#2F3BFF]" />
                                {s.name}
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link href="/contact">
                            <GradientButton className="h-16 px-12 text-sm font-black tracking-[0.2em] uppercase rounded-2xl shadow-2xl shadow-[#2F3BFF]/40">
                                Start Scaling
                            </GradientButton>
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center gap-3 h-16 px-10 text-sm font-black text-white border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                            Explore Ecosystem <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Dynamic Cybersecurity Visual Element */}
            <div className="absolute bottom-20 right-20 hidden xl:block">
                <motion.div
                    animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative group"
                >
                    {/* Glowing Aura Layers */}
                    <div className="absolute inset-x-0 inset-y-0 bg-[#2F3BFF]/30 rounded-full blur-[100px] -z-10 animate-pulse" />
                    <div className="absolute inset-[-20%] bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                    {/* The Circular Scanner / Protector */}
                    <div className="relative w-80 h-80 rounded-full border border-white/10 bg-[#0b0f2f]/60 backdrop-blur-3xl overflow-hidden flex items-center justify-center shadow-[0_0_80px_rgba(47,59,255,0.3)]">
                        {/* Outer Slow Rotating Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[2%] border border-[#2F3BFF]/10 rounded-full"
                        />

                        {/* Middle Faster Rotating Ring (Counter-Clockwise) */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[15%] border-2 border-dashed border-[#2F3BFF]/25 rounded-full"
                        />

                        {/* Fast Inner Accent Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[30%] border border-cyan-400/20 rounded-full"
                        />

                        {/* Scanner Beam */}
                        <motion.div
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-[#2F3BFF]/40 to-transparent z-20"
                        />

                        {/* The Shield Image */}
                        <img
                            src="/cybersecurity_shield_element_png_1772997592541.png"
                            alt="Security Status"
                            className="w-full h-full object-cover scale-[1.1] opacity-95 group-hover:scale-130 transition-transform duration-1000"
                        />

                        {/* Status Overlay */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#050918]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2.5 shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F3BFF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F3BFF]"></span>
                            </span>
                            <span className="text-[10px] font-black tracking-[0.2em] text-[#6B7FFF] uppercase">Active Protection</span>
                        </div>
                    </div>

                    {/* Orbiting Data Particles */}
                    {[80, 120, 160].map((dist, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div
                                className="w-1.5 h-1.5 rounded-full bg-[#2F3BFF] shadow-[0_0_10px_rgba(47,59,255,0.8)]"
                                style={{ transform: `translateX(${dist}px)` }}
                            />
                        </motion.div>
                    ))}


                </motion.div>
            </div>

            {/* Vertical Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <motion.div
                    animate={{ height: [40, 80, 40], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] bg-gradient-to-b from-[#2F3BFF] to-transparent"
                />
            </div>
        </section >
    );
}
