"use client";

import { use, useState } from "react";
import { jobs } from "@/lib/data/jobs";
import { PageHero } from "@/components/shared/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, Search, Mail, CheckCircle2, MapPin, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { GradientButton } from "@/components/shared/GradientButton";

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const job = jobs.find(j => j.id === id);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    if (!job) {
        notFound();
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/careers?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="min-h-screen bg-background text-[#050918]">
            <PageHero
                badge={job.category}
                title={job.title}
                subtitle={job.description}
                className="pb-20"
            >
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/5 border border-[#3b82f6]/10 rounded-xl text-sm font-bold">
                        <MapPin className="w-4 h-4 text-[#3b82f6]" />
                        {job.location}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/5 border border-[#3b82f6]/10 rounded-xl text-sm font-bold">
                        <Briefcase className="w-4 h-4 text-[#3b82f6]" />
                        {job.type}
                    </div>
                </div>
            </PageHero>

            {/* Sticky Search Bar for other roles */}
            <div className="sticky top-[80px] z-30 bg-background/80 backdrop-blur-md border-b border-[#3b82f6]/10 py-4 px-6">
                <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
                    <Link href="/careers" className="flex items-center gap-2 text-slate-500 hover:text-[#3b82f6] transition-colors font-bold text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Careers
                    </Link>

                    <form onSubmit={handleSearch} className="relative max-w-xs w-full group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#3b82f6] transition-colors" />
                        <input
                            type="text"
                            placeholder="Find other roles..."
                            className="w-full bg-white border border-[#3b82f6]/10 rounded-full pl-11 pr-4 py-2.5 text-sm font-medium outline-none focus:border-[#3b82f6] transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-16">
                            <div>
                                <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                                    <span className="w-8 h-1 bg-[#3b82f6] rounded-full" />
                                    The Role
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    {job.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-black mb-8">What You'll Do</h3>
                                {job.responsibilities.map((resp, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                                        </div>
                                        <p className="text-slate-600 font-medium leading-relaxed">{resp}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-black mb-8">Requirements</h3>
                                {job.requirements.map((req, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 items-start"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#3b82f6] mt-1 shrink-0" />
                                        <p className="text-slate-600 font-medium leading-relaxed">{req}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar Application */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 space-y-8">
                                <div className="p-8 rounded-[2.5rem] bg-white border border-[#3b82f6]/10 shadow-[0_20px_60px_-15px_rgba(27,24,255,0.08)] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#3b82f6]/5 rounded-full -mr-12 -mt-12" />

                                    <h4 className="text-xl font-black mb-4 relative z-10">Apply For This Role</h4>
                                    <p className="text-slate-500 text-sm font-medium mb-8 relative z-10">
                                        Interested in this position? Send your resume and a brief introduction to our talent acquisition team.
                                    </p>

                                    <Link href={`mailto:info@techactive.com?subject=Application: ${job.title}`}>
                                        <GradientButton className="w-full h-14 rounded-2xl text-xs font-black uppercase tracking-[0.2em] relative z-10 group">
                                            Apply via Email
                                            <Mail className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                                        </GradientButton>
                                    </Link>

                                    <div className="mt-8 pt-6 border-t border-[#3b82f6]/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <span>Posted 2 days ago</span>
                                        <span>Full-time</span>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-[#3b82f6] text-white overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                    <div className="relative z-10">
                                        <h4 className="text-lg font-black mb-2">Not the right fit?</h4>
                                        <p className="text-white/70 text-sm font-medium mb-6">Explore our other high-impact security roles.</p>
                                        <Link href="/careers" className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">
                                            View all jobs
                                            <ArrowLeft className="w-4 h-4 rotate-180" />
                                        </Link>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
