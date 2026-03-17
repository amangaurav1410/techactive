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
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* High-Impact Immersive Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-10">
                <img
                    src="/img-hero-cybersec.png"
                    alt=""
                    className="w-full h-full object-cover object-center scale-110"
                />
            </motion.div>

            {/* Premium Animated GridOverlay */}
            <div className="absolute inset-0 z-0 opacity-[0.25]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Glowing Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3b82f6]/20 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <motion.div style={{ y: textY, opacity }} className="max-w-4xl space-y-10">
                    {/* Badge - Removed as per request */}

                    {/* Main Headline */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-6xl md:text-8xl font-black text-[#050918] leading-[0.8] tracking-tighter"
                        >
                            ENGINEER <br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentWord}
                                    initial={{ opacity: 0, y: 40, rotateX: -90, filter: "blur(20px)" }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -40, rotateX: 90, filter: "blur(20px)" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#4D65FF] to-[#3b82f6] bg-[length:200%_auto] animate-gradient"
                                >
                                    {words[currentWord].toUpperCase()}
                                </motion.span>
                            </AnimatePresence>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.35 }}
                            className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl pt-4"
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
                            <div key={i} className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-[10px] font-black text-[#3b82f6] uppercase tracking-widest cursor-default hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all">
                                <s.icon className="w-3.5 h-3.5 text-[#3b82f6]" />
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
                        <Link href="/contact" className="z-10">
                            <GradientButton className="h-16 px-12 text-sm font-black tracking-[0.2em] uppercase rounded-2xl shadow-2xl shadow-[#3b82f6]/40">
                                Start Scaling
                            </GradientButton>
                        </Link>
                        <Link href="/services" className="inline-flex items-center justify-center gap-3 h-16 px-10 text-sm font-black text-[#050918] border border-[#3b82f6]/20 rounded-2xl hover:bg-[#3b82f6]/5 transition-all">
                            Explore Ecosystem <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>


            {/* Dynamic Cybersecurity Visual Element - Enhanced Animation */}
            <div className="absolute bottom-20 right-20 hidden xl:block">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotateX: [0, 5, 0],
                        rotateY: [0, 10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative group perspective-1000"
                >
                    {/* Glowing Aura Layers */}
                    <div className="absolute inset-x-0 inset-y-0 bg-[#3b82f6]/30 rounded-full blur-[100px] -z-10 animate-pulse" />
                    <div className="absolute inset-[-20%] bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                    {/* The Circular Scanner / Protector */}
                    <div className="relative w-80 h-80 rounded-full border border-white/10 bg-background/60 backdrop-blur-3xl overflow-hidden flex items-center justify-center shadow-[0_0_80px_rgba(27,24,255,0.3)]">
                        {/* Technical Decorative Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[2%] border border-[#3b82f6]/20 border-dashed rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[10%] border-2 border-[#3b82f6]/10 rounded-full"
                        />

                        {/* Scanner Beam */}
                        <motion.div
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-[#3b82f6]/40 to-transparent z-20"
                        />

                        {/* The Shield Image */}
                        <img
                            src="/cybersecurity-shield.png"
                            alt="Security Status"
                            className="w-full h-full object-cover scale-[1.1] opacity-95 group-hover:scale-130 transition-transform duration-1000"
                        />

                        {/* Status Overlay */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center gap-2.5 shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
                            </span>
                            <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">Active Protection</span>
                        </div>
                    </div>

                    {/* Orbiting Particles */}
                    {[80, 120, 160, 200].map((dist, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div
                                className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_15px_rgba(27,24,255,0.8)]"
                                style={{ transform: `translateX(${dist}px)` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Vertical Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#3b82f6] rotate-90 mb-4 opacity-50">Discovery</span>
                <motion.div
                    animate={{ height: [40, 80, 40], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] bg-gradient-to-b from-[#3b82f6] to-transparent"
                />
            </div>
        </section >

    );
}
