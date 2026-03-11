"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        title: "10 Critical Steps to Secure Your Enterprise Infrastructure in 2026",
        excerpt: "As cyberattacks grow more sophisticated, enterprise security posture must evolve beyond perimeter defence. We outline the 10 most impactful steps leaders can take right now.",
        category: "Cybersecurity",
        date: "March 5, 2026",
        readTime: "8 min read",
        slug: "secure-your-enterprise-infrastructure",
        image: "/img-cybersec-blog.png"
    },
    {
        title: "How AI-Powered Personalization is Reshaping Enterprise Marketing in 2026",
        excerpt: "From predictive content delivery to intent-driven ad targeting, AI is transforming how enterprise marketers engage audiences and drive measurable conversion growth.",
        category: "Marketing",
        date: "Feb 28, 2026",
        readTime: "6 min read",
        slug: "ai-revolutionizing-digital-marketing",
        image: "/img-ai-blog.png"
    },
    {
        title: "Cloud Architecture Patterns for High-Scale Distributed Systems",
        excerpt: "A practical guide to designing cloud-native architectures that deliver 99.99% uptime, horizontal scalability, and global latency under 50ms — using AWS and Kubernetes.",
        category: "IT Solutions",
        date: "Feb 20, 2026",
        readTime: "12 min read",
        slug: "scaling-your-cloud-guide",
        image: "/img-cloud.png"
    }
];

export function HomeBlog() {
    return (
        <section className="py-28 bg-background border-t border-[#3b82f6]/10">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3b82f6] mb-3">Knowledge Hub</p>
                        <h2 className="text-3xl md:text-5xl font-black text-[#050918] leading-tight">
                            Insights for the <br className="hidden md:block" />
                            <span className="text-[#3b82f6]">Modern Tech Leader.</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#3b82f6] hover:gap-3 transition-all shrink-0 pb-1"
                    >
                        Browse All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group rounded-3xl overflow-hidden glass-card transition-all duration-500 flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050918]/50 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-[#3b82f6] text-[10px] font-black text-white uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                <h4 className="text-lg font-black text-[#050918] mb-3 leading-tight group-hover:text-[#3b82f6] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-xs font-black text-[#3b82f6] border-t border-slate-100 pt-6 mt-auto group-hover:gap-3 transition-all"
                                >
                                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
