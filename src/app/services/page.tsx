"use client";

import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/shared/PageHero";
import { Shield, Cpu, PieChart, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const capabilities = [
        { title: "Strategic Consulting", description: "Helping you navigate complex technology landscapes with ease.", icon: Rocket },
        { title: "Infrastructure Optimization", description: "Seamlessly scale your existing server resources for peak performance.", icon: Cpu },
        { title: "Compliance Audits", description: "Ensuring your business meets global industry security standards.", icon: Shield },
        { title: "Advanced Analytics", description: "Deep data visualization to understand your customer base better.", icon: PieChart }
    ];

    return (
        <div className="min-h-screen bg-background">
            <PageHero
                badge="Enterprise Capabilities"
                title={<>The Infrastructure Of <br className="hidden md:block" /> <span className="text-[#1b18ff]">High-Growth</span> Business.</>}
                subtitle="We don't just provide services. We engineer the technical foundations that allow global enterprises to scale without limits."
                image="/img-hero-cybersec.png"
            >
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                    <button className="bg-[#1b18ff] text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-[#1b18ff]/30">
                        View Technical Stack
                    </button>
                    <button className="bg-[#1b18ff]/5 border border-[#1b18ff]/10 text-[#050918] px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-[#1b18ff]/10 transition-all">
                        Download Portfolio
                    </button>
                </div>
            </PageHero>

            {/* Services Grid Section (The one we redesigned to be anti-box) */}
            <div className="-mt-16 relative z-20">
                <ServicesGrid />
            </div>

            {/* Unique Capabilities - Non-Box Design */}
            <section className="py-32 bg-background text-[#050918] overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1b18ff]/10" />

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-xs font-black tracking-[0.4em] text-[#1b18ff] uppercase mb-4">Core Ecosystem</p>
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter">Beyond The <br /> <span className="text-[#1b18ff]">Development.</span></h2>
                            </motion.div>
                            <p className="text-slate-400 text-xl leading-relaxed font-medium max-w-lg">
                                We consider every vector of your digital presence. Our holistic engineering ensures that security, speed, and scalability are never compromised.
                            </p>
                            <div className="space-y-6">
                                {capabilities.map((c, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[#1b18ff]/10 flex items-center justify-center shrink-0 border border-[#1b18ff]/20 group-hover:bg-[#1b18ff] transition-all duration-500">
                                            <c.icon className="w-6 h-6 text-[#1b18ff] group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1 text-[#050918]">{c.title}</h4>
                                            <p className="text-slate-500 text-sm font-medium">{c.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Visual for Capabilities */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[4rem] overflow-hidden glass-card aspect-square">
                                <img src="/img-cloud.png" className="w-full h-full object-cover opacity-60" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 bg-[#1b18ff] p-10 rounded-[3rem] shadow-2xl text-white"
                            >
                                <p className="text-4xl font-black leading-none mb-2">99.9%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Uptime Reliability</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
