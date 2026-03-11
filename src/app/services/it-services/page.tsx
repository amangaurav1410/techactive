"use client";

import { motion } from "framer-motion";
import { Cloud, LayoutDashboard, Terminal, Database, Globe, Box, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

export default function ITServicesPage() {
    const itServices = [
        { title: "Cloud Infrastructure", description: "Design, build, and migrate to scalable, high-performance cloud environments (AWS, Azure, GCP).", icon: Cloud },
        { title: "Managed IT Services", description: "Full-service IT management for your day-to-day operations, ensuring zero downtime and peak efficiency.", icon: LayoutDashboard },
        { title: "DevOps Support", description: "Modernizing development pipelines with automated CI/CD and container orchestration (Kubernetes, Docker).", icon: Terminal },
        { title: "Enterprise Software", description: "Custom-built internal systems, CRM, and ERP solutions optimized for your specific business logic.", icon: Database },
        { title: "IT Consulting", description: "Strategic technology audits and future-proof roadmaps designed by industry-leading consultants.", icon: Globe },
        { title: "System Modernization", description: "Transitioning legacy monolithic systems into modern, microservices-based architectures.", icon: Box }
    ];

    const features = [
        "99.99% Uptime SLA Guaranteed",
        "24/7 Dedicated On-Call Support",
        "Enterprise-Grade Data Backup",
        "Scalable Resource Allocation"
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="Infrastructure Excellence"
                title={<>Modern IT Solutions <br /><span className="text-[#3b82f6]">For Enterprise Scale.</span></>}
                subtitle="We architect reliable, scalable, and secure IT ecosystems that form the backbone of your business's success in the digital age."
                image="/img-it-services.png"
            >
                <Link href="/contact">
                    <GradientButton className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-xl">
                        Scale Your Infrastructure
                    </GradientButton>
                </Link>
            </PageHero>

            {/* IT Services Grid */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">What We Offer</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-4">End-to-End Managed Solutions.</h2>
                        <p className="text-slate-500 font-medium">Expert management of your technical infrastructure so you can focus on building your business.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {itServices.map((s, i) => (
                            <div key={i} className="group p-10 bg-background border border-slate-100 rounded-3xl hover:border-[#3b82f6]/20 hover:shadow-2xl hover:shadow-[#3b82f6]/5 transition-all duration-500">
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

            {/* Uptime + Image Section */}
            <section className="py-28 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img src="/img-it-services.png" alt="Data Center" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#050918]/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Our Guarantee</p>
                                <h2 className="text-3xl md:text-5xl font-black text-[#050918] mb-6">Reliability is Our Standard.</h2>
                                <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                                    Modern business moves at the speed of light. Your infrastructure shouldn't be what holds you back. We ensure your systems are robust, scalable, and resilient to any challenge.
                                </p>
                            </div>

                            <div className="bg-background text-white p-8 rounded-3xl space-y-4">
                                <h3 className="text-2xl font-black mb-6">99.99% Uptime. Always Active.</h3>
                                <ul className="space-y-4">
                                    {features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-4 font-semibold">
                                            <CheckCircle2 className="w-5 h-5 text-[#3b82f6] shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-8 opacity-40 grayscale text-2xl font-black tracking-tighter text-slate-700">
                                {["DOCKER", "AWS", "K8S", "AZURE"].map(s => <span key={s}>{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
