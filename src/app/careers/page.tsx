"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { jobs } from "@/lib/data/jobs";
import { Search, MapPin, Briefcase, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CareersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-[#050918]">
            <PageHero
                badge="Join The Elite"
                title={<>Build The Future Of <br /> <span className="text-[#3b82f6]">Secure</span> Technology.</>}
                subtitle="We're looking for radical thinkers, elite engineers, and security obsessed professionals to join our mission."
                image="/img-hero-cybersec.png"
            >
                <div className="max-w-2xl mx-auto mt-12 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#050918] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative flex items-center bg-white border border-[#3b82f6]/10 rounded-2xl px-6 py-4 shadow-xl">
                        <Search className="w-5 h-5 text-[#3b82f6] mr-4 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search for roles (e.g. Cybersecurity, Analyst...)"
                            className="bg-transparent border-none focus:ring-0 w-full text-lg font-medium placeholder:text-slate-400 outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </PageHero>

            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <p className="text-[#3b82f6] text-xs font-black tracking-[0.4em] uppercase mb-2">Open Opportunities</p>
                            <h2 className="text-3xl font-black tracking-tight">{filteredJobs.length} Positions Available</h2>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link href={`/careers/${job.id}`}>
                                            <div className="group relative bg-white border border-[#3b82f6]/10 rounded-3xl p-8 hover:border-[#3b82f6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#3b82f6]/10 overflow-hidden">
                                                {/* Animated background element */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />

                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-black uppercase tracking-widest rounded-full">
                                                                {job.category}
                                                            </span>
                                                            <span className="flex items-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                                                <MapPin className="w-3 h-3" />
                                                                {job.location}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-2xl font-black tracking-tight group-hover:text-[#3b82f6] transition-colors">{job.title}</h3>
                                                        <p className="mt-3 text-slate-500 font-medium max-w-xl line-clamp-2">
                                                            {job.description}
                                                        </p>
                                                    </div>

                                                    <div className="shrink-0">
                                                        <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/5 flex items-center justify-center group-hover:bg-[#3b82f6] transition-all duration-500">
                                                            <ArrowRight className="w-6 h-6 text-[#3b82f6] group-hover:text-white group-hover:translate-x-1 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20 bg-[#3b82f6]/5 rounded-3xl border border-dashed border-[#3b82f6]/20"
                                >
                                    <p className="text-slate-500 font-medium text-lg">No positions match your search criteria. Try a different keyword.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-[100px] -z-10" />
            </section>

            <FinalCTA />
        </div>
    );
}
