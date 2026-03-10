"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        text: "TechActive completely transformed our enterprise security posture. Within 90 days, they identified 47 critical vulnerabilities and deployed a zero-trust framework that reduced our attack surface by over 80%.",
        author: "Sarah Johnson",
        role: "Chief Technology Officer",
        company: "Global Logistics Inc.",
        image: "/img-avatar-1.png",
        metric: "80% ↓ Attack Surface"
    },
    {
        text: "Our organic search traffic increased by 312% within six months of engaging TechActive's SEO team. They understood our market deeply and built a content strategy that dominates our competitive keywords.",
        author: "James Miller",
        role: "VP of Marketing",
        company: "TechStart Solutions",
        image: "/img-avatar-2.png",
        metric: "+312% Organic Traffic"
    },
    {
        text: "They delivered our entire B2B e-commerce platform — including custom ERP integrations — two weeks ahead of schedule. The platform processes over $4M in transactions monthly without a single downtime.",
        author: "Emma Davis",
        role: "Chief Executive Officer",
        company: "FashionHub Global",
        image: "/img-avatar-3.png",
        metric: "$4M+ Monthly GMV"
    },
    {
        text: "Migrating 40TB of sensitive financial data to AWS with zero downtime was something we thought was impossible. TechActive's cloud architects made it seamless. Our infrastructure costs dropped by 35%.",
        author: "Michael Ross",
        role: "Director of Infrastructure",
        company: "DataStream Financial",
        image: "/img-avatar-1.png",
        metric: "35% ↓ Infra Costs"
    }
];

// Double the array for seamless infinite scroll
const doubleTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1b18ff]/10" />

            <div className="container mx-auto px-6 relative z-10 mb-20">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-black uppercase tracking-[0.4em] text-[#1b18ff] mb-4"
                    >
                        Client Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#050918] tracking-tighter"
                    >
                        Trusted by the world's <br /> <span className="text-[#1b18ff]">most ambitious</span> teams.
                    </motion.h2>
                </div>
            </div>

            {/* Marquee Carousel */}
            <div className="relative flex overflow-hidden py-10">
                <motion.div
                    animate={{ x: [0, -1920] }} // Adjust based on content width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8 whitespace-nowrap shrink-0"
                >
                    {doubleTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[450px] shrink-0 glass-card rounded-[3rem] p-10 flex flex-col gap-8 transition-all duration-500 hover:border-[#1b18ff]/30"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[#050918] text-lg font-medium leading-relaxed whitespace-normal italic">
                                "{t.text}"
                            </p>

                            <div className="mt-auto flex items-center justify-between gap-6 pt-8 border-t border-[#1b18ff]/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0">
                                        <img src={t.image} alt={t.author} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div>
                                        <p className="font-black text-[#050918] text-base">{t.author}</p>
                                        <p className="text-[#1b18ff] text-xs font-black uppercase tracking-widest">{t.company}</p>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-[#1b18ff]/20 rounded-xl">
                                    <span className="text-[10px] font-black text-[#1b18ff] tracking-tighter whitespace-nowrap">{t.metric}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Carousel */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-20" />
            </div>

            {/* Sub-note */}
            <div className="container mx-auto px-6 pt-16">
                <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
                    {["Google Cloud", "Amazon AWS", "Snowflake", "Vercel", "Datadog"].map((name) => (
                        <span key={name} className="text-sm font-black text-[#050918] tracking-[0.3em] uppercase">{name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
