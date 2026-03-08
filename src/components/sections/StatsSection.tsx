"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
    value: number;
    suffix: string;
    label: string;
    description: string;
}

function StatItem({ value, suffix, label, description }: StatItemProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 1800;
            const increment = value / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <div ref={ref} className="group text-center md:text-left py-10 px-8 border-r border-b border-white/[0.06] last:border-r-0 odd:last:border-r-0 hover:bg-white/[0.03] transition-colors">
            <p className="text-5xl md:text-6xl font-black text-white tracking-tight group-hover:text-[#2F3BFF] transition-colors duration-500">
                {count}{suffix}
            </p>
            <p className="text-base font-black text-white mt-2 mb-2">{label}</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{description}</p>
        </div>
    );
}

const stats = [
    {
        value: 500,
        suffix: "+",
        label: "Projects Delivered",
        description: "Successfully completed projects across 20+ countries and 15+ industries."
    },
    {
        value: 180,
        suffix: "+",
        label: "Enterprise Clients",
        description: "Long-term partnerships with Fortune 500 companies and high-growth startups."
    },
    {
        value: 12,
        suffix: " Yrs",
        label: "Industry Experience",
        description: "Over a decade of specialized expertise in enterprise technology."
    },
    {
        value: 98,
        suffix: "%",
        label: "Client Retention Rate",
        description: "Our results keep clients coming back — and referring their peers."
    }
];

export function StatsSection() {
    return (
        <section className="py-28 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2F3BFF] mb-3">By the Numbers</p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0b0f2f]">
                        A Decade of Measurable Impact.
                    </h2>
                    <p className="mt-4 text-slate-500 font-medium max-w-xl mx-auto">
                        These aren't just numbers — they represent real businesses we helped secure, scale, and grow.
                    </p>
                </div>

                <div className="border border-slate-100 rounded-3xl overflow-hidden bg-[#0b0f2f] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <StatItem
                                value={s.value}
                                suffix={s.suffix}
                                label={s.label}
                                description={s.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
