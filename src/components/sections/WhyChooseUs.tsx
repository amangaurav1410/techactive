"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: ShieldCheck,
        title: "Security First, Always.",
        description: "Every solution we build is architected with security as the foundation — not an afterthought.",
        accent: "text-emerald-400",
        bg: "bg-emerald-500/10",
    },
    {
        icon: Zap,
        title: "Speed Without Compromise.",
        description: "Agile delivery cycles and battle-tested DevOps pipelines mean you get production-ready software faster.",
        accent: "text-amber-400",
        bg: "bg-amber-500/10",
    },
    {
        icon: Globe,
        title: "Built for Global Scale.",
        description: "Multi-region cloud-native infrastructure that scales with your business — from hundreds to millions.",
        accent: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: Award,
        title: "12+ Years of Expertise.",
        description: "A decade of real-world engineering experience across cybersecurity, cloud, web, and marketing.",
        accent: "text-purple-400",
        bg: "bg-purple-500/10",
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-brand-navy relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#2F3BFF]/10 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#6B7FFF]/5 rounded-full blur-[140px]" />
                <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: 'url("/img-hero-cybersec.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#2F3BFF] animate-ping" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">Why TechActive</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter"
                        >
                            WE ENGINEER <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F3BFF] to-[#6B7FFF]">ADVANTAGE.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl"
                        >
                            We don't just build technology; we create the competitive moat your business needs to dominate the digital landscape.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {["98.7% Satisfaction", "100% Uptime SLA", "Zero Breaches", "60-Day Guarantee"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-white font-black tracking-widest uppercase text-xs"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#2F3BFF]" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/about" className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black transition-all group">
                            Learn more about our mission <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Side: Visuals - Custom Non-Boxy Layout */}
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className={`p-10 rounded-[3rem] backdrop-blur-3xl border border-white/10 transition-all duration-500 hover:border-[#2F3BFF]/50 ${i % 2 !== 0 ? 'mt-12 md:mt-24' : ''} bg-gradient-to-b from-white/10 to-transparent`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${f.bg}`}>
                                        <f.icon className={`w-7 h-7 ${f.accent}`} />
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 leading-tight">{f.title}</h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{f.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
