"use client";

import { motion } from "framer-motion";
import { BarChart, TrendingUp, Megaphone, Target, LineChart, Sparkles, PieChart, MousePointer2 } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export default function DigitalMarketingPage() {
    const marketingServices = [
        { title: "Search Engine Optimization", description: "Increase your organic visibility and drive high-quality traffic with expert keyword research and technical audits.", icon: Target },
        { title: "Pay-Per-Click Advertising", description: "Maximizing ROI through strategic ad campaigns on Google, Meta, and LinkedIn targeted directly at your core audience.", icon: MousePointer2 },
        { title: "Social Media Marketing", description: "Build an active, engaging community and increase brand awareness across top social platforms.", icon: Megaphone },
        { title: "Content Marketing", description: "Establish authority with high-quality, SEO-driven content that resonates with your industry and conversion goals.", icon: Sparkles },
        { title: "Conversion Optimization", description: "Iterative A/B testing and user experience refinements to turn your website visitors into loyal customers.", icon: LineChart },
        { title: "Performance Analytics", description: "Real-time, transparent reporting on all campaigns to ensure every dollar you spend is working toward your goals.", icon: PieChart }
    ];

    const caseStudyStats = [
        { label: "Revenue Increase", value: "300%" },
        { label: "Cost Per Lead Reduced", value: "45%" },
        { label: "Organic Reach Growth", value: "5×" }
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="Accelerate Growth"
                title={<>Data-Driven <br /><span className="text-[#2F3BFF]">Marketing Velocity.</span></>}
                subtitle="We bypass vanity metrics to deliver results that impact your bottom line. Precision marketing for modern businesses that want to scale."
                image="/img-analytics.png"
            >
                <Link href="/contact">
                    <GradientButton className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-xl">
                        Start Your Growth Journey
                    </GradientButton>
                </Link>
            </PageHero>

            {/* Stats Bar */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {caseStudyStats.map((s, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-5xl md:text-7xl font-black text-[#2F3BFF] group-hover:scale-110 transition-transform mb-3 tracking-tighter">{s.value}</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero image + badges */}
            <section className="py-28 bg-[#F5F7FB]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2F3BFF] mb-3">Performance-First</p>
                                <h2 className="text-3xl md:text-5xl font-black text-[#0b0f2f] mb-6">Results You Can Measure.</h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                    Every campaign is built around clear KPIs and real business goals — not impressions or likes. We track what moves revenue.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {["Google & Meta Ads", "Email & SMS Campaigns", "Influencer Partnerships", "Retargeting Funnels"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#2F3BFF]" />
                                        <span className="font-semibold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                            <img src="/img-analytics.png" alt="Analytics Dashboard" className="w-full aspect-[4/3] object-cover" />
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-xl">
                                <div className="w-10 h-10 bg-[#2F3BFF] rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">ROI Increase</p>
                                    <p className="text-xl font-black text-[#0b0f2f]">+295%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing Services Grid */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2F3BFF] mb-3">What We Offer</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#0b0f2f] mb-4">Full-Service Digital Ecosystem.</h2>
                        <p className="text-slate-500 font-medium">We build comprehensive marketing funnels that convert attention into sustainable growth.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {marketingServices.map((s, i) => (
                            <div key={i} className="group p-10 bg-[#F5F7FB] border border-slate-100 rounded-3xl hover:border-[#2F3BFF]/20 hover:shadow-2xl hover:shadow-[#2F3BFF]/5 transition-all duration-500">
                                <div className="w-14 h-14 bg-[#2F3BFF]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2F3BFF] transition-colors duration-500">
                                    <s.icon className="w-7 h-7 text-[#2F3BFF] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0b0f2f] mb-3 group-hover:text-[#2F3BFF] transition-colors">{s.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-28 bg-[#0b0f2f] text-white overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B7FFF] mb-3">Our Method</p>
                    <h2 className="text-3xl md:text-5xl font-black mb-20">The TechActive Approach.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
                        {[
                            { title: "Define", desc: "Setting clear KPIs and goals aligned with your business." },
                            { title: "Analyze", desc: "Deep diving into market data and competitor landscape." },
                            { title: "Deploy", desc: "Launching precision-targeted, high-conversion campaigns." },
                            { title: "Scale", desc: "Continuous optimization based on real performance data." }
                        ].map((step, i) => (
                            <div key={i} className="space-y-4 border-l-2 border-[#2F3BFF]/30 pl-8 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#2F3BFF] rounded-full shadow-lg shadow-[#2F3BFF]/50" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Step 0{i + 1}</span>
                                <h4 className="text-2xl font-black text-[#2F3BFF]">{step.title}</h4>
                                <p className="text-slate-400 font-medium text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
