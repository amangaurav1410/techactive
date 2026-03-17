"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, CheckCircle2, Quote, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/lib/data/blog";
import { useState } from "react";

interface BlogDetailClientProps {
    post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Filter relevant insights (excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="pt-24 min-h-screen pb-24 bg-white">
            {/* Article Header */}
            <section className="py-20 bg-[#050918] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/15 rounded-full blur-[140px]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#3b82f6] font-bold uppercase tracking-widest text-xs mb-10 hover:translate-x-[-10px] transition-transform">
                        <ArrowLeft className="w-4 h-4" /> Back to Journal
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-[1.1] max-w-5xl mx-auto"
                    >
                        {post.title}
                    </motion.h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><User className="w-4 h-4 text-[#3b82f6]" /> {post.author}</div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><Calendar className="w-4 h-4 text-[#3b82f6]" /> {post.date}</div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"><Clock className="w-4 h-4 text-[#3b82f6]" /> {post.readTime}</div>
                    </div>
                </div>
            </section>

            {/* Featured Image Section */}
            <div className="container mx-auto px-4 md:px-6 -mt-24 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white bg-white aspect-[21/9]"
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
                                <Sparkles className="w-4 h-4 text-[#3b82f6]" /> Insight Index
                            </h4>
                            <ul className="space-y-4">
                                {post.content.filter(c => c.type === 'h2' || c.type === 'h3').map((h, i) => (
                                    <li key={i}>
                                        <a href={`#section-${i}`} className="text-sm font-bold text-slate-900 hover:text-[#3b82f6] transition-colors block border-l-2 border-slate-100 pl-4 py-1">
                                            {h.text}
                                        </a>
                                    </li>
                                ))}
                                {post.faqs && (
                                    <li>
                                        <a href="#faqs" className="text-sm font-bold text-slate-900 hover:text-[#3b82f6] transition-colors block border-l-2 border-slate-100 pl-4 py-1">
                                            Common Questions
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="pt-10 border-t border-slate-100 flex flex-col gap-4">
                            <button className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-[#3b82f6] uppercase tracking-widest transition-colors group">
                                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" /> Share Insight
                            </button>
                            <button className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-[#3b82f6] uppercase tracking-widest transition-colors group">
                                <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform" /> Save Article
                            </button>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="lg:col-span-2 space-y-10 prose prose-slate prose-xl max-w-none">
                        {post.content.map((c, i) => {
                            if (c.type === 'tldr') return (
                                <div key={i} className="bg-[#3b82f6]/5 border-2 border-[#3b82f6]/20 p-8 rounded-3xl !my-12">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sparkles className="w-5 h-5 text-[#3b82f6]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-[#3b82f6]">Key Takeaways (TL;DR)</span>
                                    </div>
                                    <p className="text-lg text-slate-900 font-bold leading-relaxed m-0">
                                        {c.text}
                                    </p>
                                </div>
                            );
                            if (c.type === 'h2') return <h2 key={i} id={`section-${i}`} className="text-4xl font-black text-slate-900 mb-8 mt-16 tracking-tight">{c.text}</h2>;
                            if (c.type === 'h3') return <h3 key={i} id={`section-${i}`} className="text-3xl font-bold text-slate-900 mb-6 mt-12 tracking-tight">{c.text}</h3>;
                            if (c.type === 'p') return <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium">{c.text}</p>;
                            if (c.type === 'quote') return (
                                <div key={i} className="bg-slate-50 border-l-8 border-[#3b82f6] p-12 rounded-4xl !my-16 relative">
                                    <Quote className="w-16 h-16 text-[#3b82f6]/10 absolute top-8 left-8" />
                                    <p className="text-2xl font-black text-slate-900 italic leading-snug relative z-10">"{c.text}"</p>
                                </div>
                            );
                            if (c.type === 'list') return (
                                <ul key={i} className="space-y-6 !my-12 list-none p-0">
                                    {c.items?.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-lg font-bold text-slate-700">
                                            <div className="mt-1.5 p-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                            return null;
                        })}

                        {/* FAQs Section */}
                        {post.faqs && (
                            <div id="faqs" className="mt-24 pt-24 border-t border-slate-100">
                                <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Common Questions</h2>
                                <div className="space-y-4">
                                    {post.faqs.map((faq, idx) => (
                                        <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden bg-white hover:border-[#3b82f6]/30 transition-colors">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-6 text-left"
                                            >
                                                <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                                                <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-50">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Final Note */}
                        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] space-y-6 text-white relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl" />
                            <h4 className="text-2xl font-black relative z-10">Protect Your Business Today</h4>
                            <p className="text-lg text-slate-400 font-medium relative z-10">Staying ahead of cyber threats and market shifts requires more than just reactive measures. TechActive provides the strategic partnership your Sydney business needs to scale safely.</p>
                            <Link href="/contact" className="inline-flex h-12 px-8 items-center bg-[#3b82f6] text-white font-black text-sm rounded-xl hover:scale-105 active:scale-95 transition-all relative z-10 uppercase tracking-widest">
                                Book a Strategy Call
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar Right: Author / Related */}
                    <aside className="space-y-12 h-fit sticky top-32">
                        <div className="bg-white border border-slate-100 shadow-2xl p-8 rounded-[2.5rem] text-center">
                            <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden mx-auto mb-6 shadow-xl border-4 border-[#3b82f6]/10 flex items-center justify-center">
                                <User className="w-12 h-12 text-slate-300" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">{post.author}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-4">{post.authorRole}</p>
                            <p className="text-sm font-medium text-slate-500 mb-6">Expert guidance from the TechActive practitioner team based in Sydney, Australia.</p>
                            <Link href="/contact" className="inline-block text-xs font-black text-slate-900 border-b-2 border-[#3b82f6] hover:text-[#3b82f6] transition-colors pb-1 uppercase tracking-widest">Get in Touch</Link>
                        </div>

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-100 pb-4">Related Insights</h4>
                            <div className="space-y-8">
                                {relatedPosts.map((r, i) => (
                                    <Link key={i} href={`/blog/${r.slug}`} className="group block">
                                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#3b82f6] transition-colors mb-2 leading-tight uppercase tracking-tighter underline underline-offset-4 decoration-slate-200 decoration-1">
                                            {r.title}
                                        </h5>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black tracking-widest uppercase">
                                            <Calendar className="w-3 h-3" /> {r.date}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
