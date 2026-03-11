"use client";

import { motion } from "framer-motion";
import { Shield, BarChart2, Code2, Settings, Search, ArrowRight, Sparkles, Globe } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Cybersecurity",
        description: "Zero-trust architecture and AI-driven threat detection.",
        icon: Shield,
        href: "/services/cybersecurity",
        image: "/img-hero-cybersec.png",
        color: "bg-emerald-500",
    },
    {
        title: "Digital Marketing",
        description: "ROI-obsessed campaigns that turn audiences into customers.",
        icon: BarChart2,
        href: "/services/digital-marketing",
        image: "/img-analytics.png",
        color: "bg-amber-500",
    },
    {
        title: "Web Engineering",
        description: "Scalable web platforms built with enterprise security.",
        icon: Code2,
        href: "/services/web-development",
        image: "/img-web-dev.png",
        color: "bg-blue-500",
    },
    {
        title: "Managed IT",
        description: "Cloud infrastructure on AWS & GCP with 99.99% uptime.",
        icon: Settings,
        href: "/services/it-services",
        image: "/img-cloud.png",
        color: "bg-cyan-500",
    },
    {
        title: "Growth SEO",
        description: "Technical SEO audits and precision precision PPC.",
        icon: Search,
        href: "/services/seo-sem",
        image: "/img-seo-center.png",
        color: "bg-purple-500",
    }
];

export function ServicesGrid() {
    return (
        <section className="py-32 bg-background overflow-hidden relative">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header - Centered for Circular Flow */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 mb-8"
                    >
                        <Globe className="w-4 h-4 animate-spin-slow" />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase">Enterprise Ecosystem</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-[#050918] leading-[0.9] tracking-tighter"
                    >
                        Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#6B7FFF]">Digital Standards</span> <br /> For Today's Enterprise.
                    </motion.h2>
                </div>

                {/* Circular Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <Link href={service.href} className="group block text-center">
                                {/* The 'Circular' Visual Pod */}
                                <div className="relative mb-10 mx-auto w-64 h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                                    {/* Rotating Outer Ring */}
                                    <div className="absolute inset-[-15px] border-2 border-dashed border-slate-100 rounded-full group-hover:border-[#3b82f6]/30 transition-colors duration-700 animate-[spin_20s_linear_infinite]" />

                                    {/* Animated decorative orbs orbiting */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 z-20 pointer-events-none"
                                    >
                                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${service.color} shadow-lg shadow-${service.color}/50`} />
                                    </motion.div>

                                    {/* Main Circular Image Container */}
                                    <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-[#F5F7FB] shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.05]">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#050918]/80 via-transparent to-transparent opacity-60" />

                                        {/* Icon Centered Float */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] transition-all duration-500">
                                                <service.icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content - Also rounded/circular flow */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-[#050918] tracking-tight group-hover:text-[#3b82f6] transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
                                        {service.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-[10px] font-black text-[#3b82f6] tracking-[0.2em] uppercase pt-4 transition-all group-hover:translate-x-2">
                                        Explore Solution <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Final Pod: Custom Project (Circular variation) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/contact" className="group block text-center h-full">
                            <div className="relative mb-10 mx-auto w-64 h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                                <div className="absolute inset-[-15px] bg-background rounded-full group-hover:bg-[#3b82f6] transition-colors duration-500" />
                                <div className="absolute inset-0 rounded-full bg-background border-[12px] border-[#050918] shadow-2xl relative z-10 flex flex-col items-center justify-center p-8 text-white overflow-hidden">
                                    {/* Background patterns */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />

                                    <Sparkles className="w-10 h-10 text-[#3b82f6] group-hover:text-white mb-4 relative z-10 animate-pulse" />
                                    <h4 className="text-xl font-black leading-[1.1] mb-2 relative z-10 group-hover:scale-110 transition-transform">
                                        Need a Custom <br /> <span className="text-[#3b82f6] group-hover:text-white">Project?</span>
                                    </h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Start Engineering</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-[#050918] tracking-tight">Consultation</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
                                    Book a direct engineering audit for your infrastructure.
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Global Spinners CSS (added via style tag for convenience or could be in globals.css) */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
}
