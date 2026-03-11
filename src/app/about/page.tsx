"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";

export default function AboutPage() {
    const values = [
        {
            title: "Our Mission",
            description: "To empower businesses through innovative technology and secure infrastructure, enabling them to reach their full potential in an ever-evolving digital landscape.",
            icon: Target
        },
        {
            title: "Our Vision",
            description: "To be the world's most trusted partner for enterprise technology, known for our unwavering commitment to security, quality, and client success.",
            icon: Eye
        }
    ];

    const process = [
        { title: "Consultation", description: "Deep dive into your business needs and current infrastructure." },
        { title: "Strategy", description: "Designing a custom technology roadmap tailored to your specific goals." },
        { title: "Execution", description: "Seamless implementation with continuous testing and optimization." },
        { title: "Support", description: "24/7 dedicated support and maintenance to ensure peak performance." }
    ];

    return (
        <div className="pb-20">
            <PageHero
                badge="About TechActive"
                title={<>Pioneering the Future of <span className="text-[#3b82f6]">Enterprise Tech</span></>}
                subtitle="Since 2021, TechActive has been at the forefront of digital transformation, delivering high-impact solutions to 150+ happy clients worldwide."
                image="/img-about-team.png"
            />

            {/* Company Overview */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-3xl" />
                            <img
                                src="/img-about-team.png"
                                alt="TechActive Team"
                                className="rounded-3xl shadow-2xl border border-slate-100 relative z-10 w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#3b82f6] to-[#3b82f6] p-8 rounded-2xl shadow-xl z-20 text-white">
                                <p className="text-4xl font-extrabold">5+</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years Excellence</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-[#050918] leading-tight">
                                Excellence in Every <span className="text-[#3b82f6]">Line of Code.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                TechActive was founded on the principle that technology should be an enabler, not a bottleneck. We specialize in bridging the gap between complex business challenges and elegant, scalable technical solutions.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Global team of 45+ technical experts",
                                    "End-to-end service from design to deployment",
                                    "Security-first approach in all developments",
                                    "Certified AWS and Google Cloud partners"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                                        <CheckCircle2 className="w-5 h-5 text-[#3b82f6] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">What Drives Us</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918]">Mission & Vision</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="bg-white p-12 rounded-3xl border border-slate-100 shadow-lg transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-8">
                                    <v.icon className="w-8 h-8 text-[#3b82f6]" />
                                </div>
                                <h3 className="text-2xl font-black text-[#050918] mb-4">{v.title}</h3>
                                <p className="text-lg text-slate-500 leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">How We Work</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918]">Our Seamless Process.</h2>
                        <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto font-medium">How we turn your vision into a production-ready reality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((p, i) => (
                            <div key={i} className="relative group h-full">
                                {i < 3 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-slate-100 -z-0" />
                                )}
                                <div className="bg-background p-10 rounded-2xl border border-slate-100 group-hover:bg-[#3b82f6] transition-all duration-500 relative z-10 h-full">
                                    <div className="text-5xl font-black text-slate-400 group-hover:text-white/20 mb-6 transition-colors duration-500">0{i + 1}</div>
                                    <h4 className="text-xl font-bold text-[#050918] group-hover:text-white mb-3 transition-colors duration-500">{p.title}</h4>
                                    <p className="text-slate-500 group-hover:text-white/80 transition-colors duration-500 font-medium text-sm leading-relaxed">{p.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Stats Bar */}
            <section className="py-20 bg-background border-t border-[#3b82f6]/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {[["150+", "Happy Clients"], ["500+", "Projects Delivered"], ["5+", "Years of Experience"], ["45+", "Team Experts"]].map(([val, label]) => (
                            <div key={label}>
                                <p className="text-4xl md:text-5xl font-black text-[#3b82f6] mb-2">{val}</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#050918]">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
