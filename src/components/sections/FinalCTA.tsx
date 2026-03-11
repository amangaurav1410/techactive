"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/shared/GradientButton";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const guarantees = [
    "Free strategic consultation",
    "Dedicated account manager",
    "Transparent fixed pricing",
    "60-day performance guarantee"
];

export function FinalCTA() {
    return (
        <section className="py-40 bg-background overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="relative">
                    {/* Abstract background shapes - no boxes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3b82f6]/5 rounded-[10rem] rotate-12 -z-10" />

                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4"
                            >
                                <Sparkles className="w-8 h-8 text-[#3b82f6]" />
                                <span className="text-xs font-black tracking-[0.4em] text-[#3b82f6] uppercase">Ready to scale?</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-[#050918] leading-[0.9] tracking-tighter"
                            >
                                YOUR JOURNEY <br /> <span className="text-[#3b82f6]">STARTS HERE.</span>
                            </motion.h2>

                            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg">
                                Join the elite engineering ecosystem. Secure your infrastructure and accelerate your growth with TechActive.
                            </p>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {guarantees.map((g, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                                        <span className="text-sm font-bold text-slate-700">{g}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <Link href="/contact">
                                    <GradientButton className="h-16 px-10 text-sm font-black tracking-widest uppercase rounded-2xl shadow-2xl shadow-[#3b82f6]/40">
                                        Book Free Consultation
                                    </GradientButton>
                                </Link>
                                <Link href="/services" className="inline-flex items-center justify-center gap-2 h-16 px-10 text-sm font-bold text-[#050918] hover:text-[#3b82f6] transition-all">
                                    View Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: Immersive Visual with non-box boundaries */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative w-full aspect-square rounded-[5rem] overflow-hidden translate-x-4 translate-y-4 rotate-3 group">
                                <img src="/img-about-team.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050918] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Mask overlay for anti-box feel */}
                            <div className="absolute inset-0 border-[1.5rem] border-white rounded-[5rem] -rotate-3 -z-10" />


                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
