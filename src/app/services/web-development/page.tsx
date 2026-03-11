"use client";

import { motion } from "framer-motion";
import { Code, Layout, ShoppingCart, Globe, Settings, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export default function WebDevelopmentPage() {
    const webServices = [
        { title: "Corporate Websites", description: "Premium, high-performance websites for enterprises that reflect your brand's excellence.", icon: Globe },
        { title: "Ecommerce Development", description: "Scale your sales with custom, secure, and intuitive online shopping experiences.", icon: ShoppingCart },
        { title: "Web Applications", description: "Complex, SaaS-ready platforms built with the latest frameworks (Next.js, React, Node.js).", icon: Code },
        { title: "UI/UX Design", description: "User-centric design that balances aesthetic beauty with functional excellence.", icon: Layout },
        { title: "Website Maintenance", description: "24/7 monitoring, security updates, and performance tuning for your existing platforms.", icon: Settings },
        { title: "Enterprise API", description: "Seamlessly connect your digital ecosystem with robust, secure backend integrations.", icon: Sparkles }
    ];

    const portfolio = [
        { title: "FinTech Platform", category: "Web App", img: "/img-analytics.png" },
        { title: "Modern E-commerce", category: "E-shop", img: "/img-web-dev.png" },
        { title: "Corporate Portal", category: "SaaS", img: "/img-hero-cybersec.png" }
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="The Future of Web Development"
                title={<>Building <span className="text-[#3b82f6]">High-Velocity</span> <br />Web Experiences.</>}
                subtitle="Next-generation web development that combines stunning aesthetics with extreme performance and security."
                image="/img-web-dev.png"
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/contact">
                        <GradientButton className="h-14 px-10 text-sm rounded-xl tracking-widest uppercase font-black">
                            Build Your Project
                        </GradientButton>
                    </Link>
                </div>
                {/* Tech badges */}
                <div className="flex flex-wrap justify-center gap-3">
                    {["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                        <span key={tech} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/70 tracking-widest">
                            {tech}
                        </span>
                    ))}
                </div>
            </PageHero>

            {/* Web Services Grid */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">What We Build</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-4">Crafting Digital Masterpieces.</h2>
                        <p className="text-slate-500 font-medium leading-relaxed">Code is only part of the solution. We focus on creating experiences that engage users and drive meaningful business results.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {webServices.map((s, i) => (
                            <div key={i} className="group p-10 bg-background border border-slate-100/50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#3b82f6]/5 transition-all duration-500">
                                <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3b82f6] transition-colors duration-500">
                                    <s.icon className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h4 className="text-xl font-bold text-[#050918] mb-3 group-hover:text-[#3b82f6] transition-colors">{s.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="py-28 bg-background text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B7FFF] mb-3">Portfolio Preview</p>
                        <h2 className="text-3xl md:text-5xl font-black">Showcase of Excellence.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolio.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 cursor-pointer"
                            >
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <h4 className="text-2xl font-black mb-1">{p.title}</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] mb-4">{p.category}</p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-white/70">
                                        Explore Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Standards */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Our Standard</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-16">The TechActive Development Standard.</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                            {["SEO-Ready Architecture", "Mobile-First Design", "95+ Lighthouse Score", "Enterprise Security"].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <CheckCircle2 className="w-8 h-8 text-[#3b82f6]" />
                                    <h4 className="text-base font-bold text-[#050918] leading-tight">{benefit}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
