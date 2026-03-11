"use client";

import { motion } from "framer-motion";
import { Search, Globe, Target, BarChart, Settings, TrendingUp, Rocket } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export default function SEOPage() {
    const seoServices = [
        { title: "Technical SEO", description: "Improving site structure, speed, and crawlability for search engines like Google.", icon: Settings },
        { title: "On-page SEO", description: "Optimizing individual pages, content, and metadata to rank higher and earn more relevant traffic.", icon: Search },
        { title: "Off-page SEO", description: "Building high-quality backlink profiles and digital PR through authority-driven strategies.", icon: Globe },
        { title: "Keyword Research", description: "Deep analysis of intent-based queries to target the most profitable terms in your industry.", icon: Target },
        { title: "Google Ads (SEM)", description: "Precision-targeted paid search campaigns that deliver immediate ROI and conversion growth.", icon: Rocket },
        { title: "Analytics & Reporting", description: "Transparent, real-time dashboards that show exactly where your organic growth is coming from.", icon: BarChart }
    ];

    const results = [
        "Average Ranking Position: #2.4",
        "Keyword Visibility: +300%",
        "Organic Click-Through: +45%",
        "Conversion Rate Optimization: +22%"
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="Dominant Organic Visibility"
                title={<>Command the <br /><span className="text-[#3b82f6]">Search Landscape.</span></>}
                subtitle="Expert SEO and SEM strategies designed to drive sustainable organic growth and high-conversion paid traffic for your business."
                image="/img-seo-center.png"
            >
                <Link href="/contact">
                    <GradientButton className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-xl">
                        Audit My Website
                    </GradientButton>
                </Link>
            </PageHero>

            {/* SEO Services Grid */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Our SEO Services</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-4">Strategic Search Dominance.</h2>
                        <p className="text-slate-500 font-medium leading-relaxed">We don't just optimize for search engines; we optimize for humans and search engines together.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seoServices.map((s, i) => (
                            <div key={i} className="group p-10 bg-background border border-slate-100/50 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#3b82f6]/5 transition-all duration-500">
                                <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3b82f6] transition-colors duration-500">
                                    <s.icon className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h4 className="text-xl font-bold text-[#050918] group-hover:text-[#3b82f6] transition-colors mb-3">{s.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Proven Results</p>
                                <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-6">Measurable Ranking Improvements.</h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                                    Within the first 6 months, our average client sees a 150% increase in organic keywords ranking on page one of Google.
                                </p>
                            </div>
                            <ul className="space-y-5">
                                {results.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[#050918] font-bold text-lg">
                                        <TrendingUp className="w-6 h-6 text-[#3b82f6] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img src="/img-seo-center.png" alt="SEO Analytics" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tl from-[#050918]/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Chart */}
            <section className="py-20 bg-background border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-background rounded-3xl p-10 border border-slate-100">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-6">12-Month Growth</p>
                            <div className="flex items-end gap-2 h-48">
                                {[20, 35, 30, 55, 50, 85, 80, 95, 88, 100, 98, 110].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.06 }}
                                        className="flex-1 bg-[#3b82f6]/20 hover:bg-[#3b82f6] transition-colors rounded-t-lg"
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-[10px] font-black tracking-widest text-slate-400">
                                <span>JAN</span><span>DEC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
