"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckSquare, Cloud, ClipboardCheck, EyeOff, ShieldAlert, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export default function CybersecurityPage() {
    const securityServices = [
        { title: "Threat Detection", description: "Proactive monitoring and automated response to identify threats before they penetrate your perimeter.", icon: ShieldAlert },
        { title: "Network Security", description: "Robust firewall configurations and intrusion prevention systems tailored for your enterprise architecture.", icon: ShieldCheck },
        { title: "Penetration Testing", description: "Ethical hacking simulations to find vulnerability gaps in your web or mobile applications.", icon: EyeOff },
        { title: "Security Audits", description: "Comprehensive reviews of your internal and external systems to assess your overall risk posture.", icon: ClipboardCheck },
        { title: "Cloud Security", description: "Securing your multi-cloud and hybrid environments (AWS, Azure, Google Cloud) with modern best practices.", icon: Cloud },
        { title: "Compliance Consulting", description: "Expert guidance for ensuring your business meets HIPAA, GDPR, SOC 2, and other regulatory standards.", icon: CheckSquare }
    ];

    const benefits = [
        "24/7 endpoint monitoring and real-time alerts",
        "Military-grade encryption for all data-at-rest and transit",
        "Reduced risk of downtime and operational disruption",
        "Enhanced customer trust and brand reputation"
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="Defend & Protect"
                title={<>Cybersecurity <br /><span className="text-[#1b18ff]">Without Compromise.</span></>}
                subtitle="In a digital-first world, your security is your reputation. TechActive delivers elite-level protection for your data, infrastructure, and peace of mind."
                image="/img-hero-cybersec.png"
            >
                <Link href="/contact">
                    <GradientButton className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-xl">
                        Secure Your Business Now
                    </GradientButton>
                </Link>
            </PageHero>

            {/* Services Grid */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1b18ff] mb-3">What We Offer</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-4">Comprehensive Security Solutions.</h2>
                        <p className="text-slate-500 font-medium">Protecting every layer of your technology stack with precision-engineered security protocols.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {securityServices.map((s, i) => (
                            <div key={i} className="group p-10 bg-background border border-slate-100 rounded-3xl hover:bg-background transition-all duration-500">
                                <div className="w-14 h-14 bg-[#1b18ff]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1b18ff] transition-colors">
                                    <s.icon className="w-7 h-7 text-[#1b18ff] group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-[#050918] group-hover:text-white mb-3 transition-colors">{s.title}</h4>
                                <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium text-sm transition-colors">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#1b18ff] mb-3">Why TechActive Security</p>
                                <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-8">Why Invest in Our Security?</h2>
                                <ul className="space-y-5">
                                    {benefits.map((b, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#1b18ff] flex items-center justify-center mt-0.5 shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-lg font-semibold text-slate-700">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100 italic font-medium text-slate-600 text-sm leading-relaxed">
                                "TechActive has redefined what it means to be a secure enterprise. Their threat detection is unparalleled." <span className="not-italic font-black text-[#050918]">— CTO, Venture Partners</span>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-2xl aspect-[4/3]">
                            <img
                                src="/img-hero-cybersec.png"
                                className="w-full h-full object-cover"
                                alt="Security Operations Center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#050918]/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-background border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Expertise Across Industries</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale font-black text-2xl tracking-tighter text-slate-600">
                        {["FINTECH", "HEALTHCARE", "E-COMMERCE", "GOVERNMENT", "SaaS"].map((s) => (
                            <span key={s}>{s}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
