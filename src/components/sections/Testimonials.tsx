"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        text: "Honestly, I was skeptical at first — we'd tried two agencies before and got burned. TechActive was different. They actually took time to understand our business before touching anything. Our site went from page 4 to page 1 for our main keywords within four months. Still can't believe it.",
        author: "Ryan Patel",
        role: "Co-founder",
        company: "Nexora Retail",
        image: "/img-avatar-1.png",
        metric: "+220% Organic Leads"
    },
    {
        text: "We had a pretty bad security incident last year and didn't know where to start. The TechActive team came in, did a full audit, and walked us through every finding without making us feel dumb. They patched things methodically and gave us a playbook we actually use. Solid team.",
        author: "Claire Hutchinson",
        role: "Operations Manager",
        company: "Bridgepoint Finance",
        image: "/img-avatar-2.png",
        metric: "Zero incidents post-audit"
    },
    {
        text: "We needed a new website fast — like, two months fast. They delivered in six weeks and it looked better than anything I'd seen from agencies charging twice as much. The team was responsive, no ghosting, no vague updates. Just got it done.",
        author: "Ben Okafor",
        role: "Head of Growth",
        company: "Luminary Labs",
        image: "/img-avatar-3.png",
        metric: "6-week delivery"
    },
    {
        text: "Our Google Ads were bleeding money — $8k a month with almost nothing to show for it. TechActive restructured the entire account in a few weeks. By month two we were paying less and converting more. That's the only metric that matters.",
        author: "Priya Sharma",
        role: "Marketing Director",
        company: "CloudVault SaaS",
        image: "/img-avatar-1.png",
        metric: "3.4× ROAS improvement"
    },
    {
        text: "I've worked with a lot of dev teams. What sets TechActive apart is they actually communicate. No jargon, no excuses, and they flagged a potential issue before it became a problem. That kind of proactiveness is rare.",
        author: "Marcus Webb",
        role: "Product Manager",
        company: "Stackline Commerce",
        image: "/img-avatar-2.png",
        metric: "On-time, on-budget delivery"
    }
];

// Double the array for seamless infinite scroll
const doubleTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3b82f6]/10" />

            <div className="container mx-auto px-6 relative z-10 mb-20">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-black uppercase tracking-[0.4em] text-[#3b82f6] mb-4"
                    >
                        Client Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#050918] tracking-tighter"
                    >
                        Trusted by the world's <br /> <span className="text-[#3b82f6]">most ambitious</span> teams.
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
                            className="w-[450px] shrink-0 glass-card rounded-[3rem] p-10 flex flex-col gap-8 transition-all duration-500 hover:border-[#3b82f6]/30"
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

                            <div className="mt-auto flex items-center justify-between gap-6 pt-8 border-t border-[#3b82f6]/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0">
                                        <img src={t.image} alt={t.author} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div>
                                        <p className="font-black text-[#050918] text-base">{t.author}</p>
                                        <p className="text-[#3b82f6] text-xs font-black uppercase tracking-widest">{t.company}</p>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-[#3b82f6]/20 rounded-xl">
                                    <span className="text-[10px] font-black text-[#3b82f6] tracking-tighter whitespace-nowrap">{t.metric}</span>
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
