"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, CheckCircle2, Quote, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params.slug;

    const post = {
        title: "10 Steps to Secure Your Enterprise Infrastructure in 2026",
        category: "Cybersecurity",
        date: "March 5, 2026",
        author: "Alex Rivera",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600",
        content: [
            { type: "h2", text: "Introduction to 2026 Security Landscape" },
            { type: "p", text: "As we move further into 2026, the complexity of technical threats has reached an all-time high. Traditional perimeter-based security is no longer sufficient for modern distributed architectures. In this guide, we explore the essential pillars of enterprise-grade protection." },
            { type: "h3", text: "1. Zero-Trust Architecture Implementation" },
            { type: "p", text: "Never trust, always verify. Every request, whether originating inside or outside the network, must be fully authenticated and authorized before granting access. This is the bedrock of modern cybersecurity." },
            { type: "quote", text: "Security is not a final product, but a continuous process of evolution and adaptation." },
            { type: "h3", text: "2. AI-Driven Threat Detection" },
            { type: "p", text: "Leveraging machine learning models to identify anomalous patterns in real-time allows organizations to respond to threats milliseconds after they emerge, far faster than any human operator could." },
            { type: "list", items: ["Endpoint Monitoring", "Network Traffic Analysis", "Behavioral Biometrics", "Automated SIEM Integration"] },
        ]
    };

    return (
        <div className="pt-24 min-h-screen pb-24 bg-white">
            {/* Article Header */}
            <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-xs mb-10 hover:translate-x-[-10px] transition-transform">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        {post.title}
                    </motion.h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><User className="w-4 h-4 text-brand-blue" /> {post.author}</div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><Calendar className="w-4 h-4 text-brand-blue" /> {post.date}</div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-brand-blue" /> {post.readTime}</div>
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <div className="container mx-auto px-4 md:px-6 -mt-24 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white/5 bg-white aspect-[21/9]"
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>
            </div>

            {/* Content Layout */}
            <div className="container mx-auto px-4 md:px-6 py-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                    {/* Sidebar Left: TOC / Sharing */}
                    <aside className="hidden lg:block space-y-12 h-fit sticky top-32">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-brand-blue" /> Insight Index
                            </h4>
                            <ul className="space-y-4">
                                {post.content.filter(c => c.type === 'h2' || c.type === 'h3').map((h, i) => (
                                    <li key={i}>
                                        <span className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors cursor-pointer block border-l-2 border-slate-100/50 pl-4 py-1">
                                            {h.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-10 border-t border-slate-100 flex flex-col gap-4">
                            <button className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">
                                <Share2 className="w-5 h-5" /> Share Insight
                            </button>
                            <button className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">
                                <Bookmark className="w-5 h-5" /> Save Article
                            </button>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="lg:col-span-2 space-y-10 prose prose-slate prose-xl max-w-none">
                        {post.content.map((c, i) => {
                            if (c.type === 'h2') return <h2 key={i} className="text-4xl font-black text-brand-navy mb-8 mt-12">{c.text}</h2>;
                            if (c.type === 'h3') return <h3 key={i} className="text-3xl font-bold text-brand-navy mb-6 mt-10">{c.text}</h3>;
                            if (c.type === 'p') return <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{c.text}</p>;
                            if (c.type === 'quote') return (
                                <div key={i} className="bg-brand-bg border-l-8 border-brand-blue p-12 rounded-3xl !my-16">
                                    <Quote className="w-12 h-12 text-brand-blue/20 mb-6" />
                                    <p className="text-2xl font-black text-brand-navy italic leading-snug">"{c.text}"</p>
                                </div>
                            );
                            if (c.type === 'list') return (
                                <ul key={i} className="space-y-6 !my-12">
                                    {c.items?.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-lg font-bold text-slate-700">
                                            <CheckCircle2 className="w-6 h-6 text-brand-blue mt-1 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                            return null;
                        })}

                        {/* Final Note */}
                        <div className="mt-20 p-12 bg-slate-50 border border-slate-100 rounded-3xl space-y-6">
                            <h4 className="text-2xl font-black text-brand-navy">Conclusion</h4>
                            <p className="text-lg text-slate-500 font-medium">Staying ahead of the curve requires constant vigilance and institutionalized security protocols. TechActive can help you implement these strategies systematically.</p>
                        </div>
                    </div>

                    {/* Sidebar Right: Author / Related */}
                    <aside className="space-y-12 h-fit sticky top-32">
                        <div className="bg-white border border-slate-100 shadow-3xl p-8 rounded-3xl text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-xl border-4 border-brand-blue/10">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" alt={post.author} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-xl font-black text-brand-navy uppercase tracking-tighter mb-2">{post.author}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4">Security Analyst</p>
                            <p className="text-sm font-medium text-slate-400 mb-6">Alex has 10+ years of experience in securing financial systems across North America.</p>
                            <Link href="/about" className="inline-block text-xs font-black text-brand-navy border-b-2 border-brand-blue hover:text-brand-blue transition-colors pb-1">VIEW PROFILE</Link>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-100 pb-4">Related Insights</h4>
                            <div className="space-y-8">
                                {[
                                    "How AI is Revolutionizing Marketing",
                                    "Scaling Your Cloud Strategy for 2026",
                                    "The Future of DevOps in Global SaaS"
                                ].map((r, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <h5 className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2 leading-tight uppercase tracking-tighter underline underline-offset-4 decoration-slate-200 decoration-1">
                                            {r}
                                        </h5>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black tracking-widest">
                                            <Calendar className="w-3 h-3" /> MAR 1, 2026
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
