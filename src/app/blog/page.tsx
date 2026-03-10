"use client";

import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";

const categories = ["All", "Cybersecurity", "Marketing", "IT Solutions", "Development", "SEO"];

const blogPosts = [
    {
        title: "10 Critical Steps to Secure Your Enterprise Infrastructure in 2026",
        excerpt: "As cyberattacks grow more sophisticated and regulations tighten globally, enterprise security posture must evolve beyond perimeter defense. We outline the 10 most impactful, immediately actionable steps technology leaders can implement right now to dramatically reduce risk.",
        category: "Cybersecurity",
        date: "March 5, 2026",
        author: "Alex Rivera",
        authorRole: "Head of Security",
        readTime: "8 min read",
        slug: "secure-your-enterprise-infrastructure",
        image: "/img-cybersec-blog.png",
        featured: true
    },
    {
        title: "How AI-Powered Personalization is Reshaping Enterprise Marketing",
        excerpt: "From predictive content delivery to real-time intent-driven targeting, AI is fundamentally changing how enterprise marketing teams engage audiences and measure conversion growth at scale.",
        category: "Marketing",
        date: "March 1, 2026",
        author: "Elena Petrova",
        authorRole: "Marketing Strategist",
        readTime: "6 min read",
        slug: "ai-revolutionizing-digital-marketing",
        image: "/img-ai-blog.png"
    },
    {
        title: "Cloud Architecture Patterns for High-Scale Distributed Systems",
        excerpt: "A practical engineering guide to designing cloud-native architectures that deliver 99.99% uptime, horizontal scalability, and global latency under 50ms — using AWS, Kubernetes, and modern microservices patterns.",
        category: "IT Solutions",
        date: "Feb 22, 2026",
        author: "Dmitry Volkov",
        authorRole: "Cloud Architect",
        readTime: "12 min read",
        slug: "scaling-your-cloud-guide",
        image: "/img-cloud.png"
    },
    {
        title: "Next.js 15 App Router: The New Enterprise Standard for Web Development",
        excerpt: "Next.js 15 introduces server-side streaming, partial prerendering, and Turbopack by default. Here's why the world's leading engineering teams are adopting it for mission-critical applications.",
        category: "Development",
        date: "Feb 10, 2026",
        author: "Jane Smith",
        authorRole: "Lead Engineer",
        readTime: "7 min read",
        slug: "nextjs-15-web-app-standard",
        image: "/img-web-dev.png"
    },
    {
        title: "The $4M SEO Playbook: How We Tripled Organic Revenue Without Paid Ads",
        excerpt: "A behind-the-scenes look at the SEO strategy TechActive used to take a B2B SaaS client from 12,000 to 380,000 monthly organic sessions — and how we turned that traffic into $4M in attributable pipeline.",
        category: "SEO",
        date: "Jan 28, 2026",
        author: "Marcus Lee",
        authorRole: "SEO Director",
        readTime: "10 min read",
        slug: "seo-playbook-organic-revenue",
        image: "/img-seo-center.png"
    }
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredPost = blogPosts.find(p => p.featured)!;
    const regularPosts = blogPosts.filter(p => !p.featured);

    const filteredPosts = regularPosts.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Industry Knowledge Hub"
                title={<>TechActive <span className="text-[#1b18ff]">Journal.</span></>}
                subtitle="Expert insights on enterprise technology, cybersecurity, cloud architecture, digital marketing, and engineering — written by practitioners, not theorists."
                image="/img-blog-hero.png"
            >
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {["Cybersecurity", "Cloud", "AI & ML", "Marketing", "Engineering"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-white/70 uppercase tracking-widest hover:bg-[#1b18ff]/30 hover:text-white transition-all cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </PageHero>

            {/* Featured Article */}
            <section className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-[2px] bg-[#1b18ff]" />
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#1b18ff]">Editor's Pick</p>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#050918]/50 to-transparent" />
                            <div className="absolute top-6 left-6">
                                <span className="px-4 py-1.5 rounded-full bg-[#1b18ff] text-xs font-black text-white uppercase tracking-widest">
                                    {featuredPost.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#050918] leading-[1.08] group-hover:text-[#1b18ff] transition-colors duration-500">
                                {featuredPost.title}
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                <div className="w-10 h-10 rounded-xl overflow-hidden">
                                    <img src="/img-avatar-1.png" alt={featuredPost.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-[#050918]">{featuredPost.author}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{featuredPost.authorRole}</p>
                                </div>
                                <div className="ml-auto inline-flex items-center gap-2 text-sm font-black text-[#1b18ff] group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 bg-background border-b border-slate-100 sticky top-[70px] z-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Category tabs */}
                        <div className="flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${activeCategory === cat
                                            ? "bg-[#1b18ff] text-white shadow-md shadow-[#1b18ff]/30"
                                            : "bg-white border border-slate-200 text-slate-500 hover:text-[#1b18ff] hover:border-[#1b18ff]/20"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full h-10 bg-white border border-slate-200 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b18ff]/20 font-medium text-slate-600 placeholder:text-slate-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400 font-bold">No articles found. Try a different search or category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    className="group flex flex-col bg-background border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#1b18ff]/5 hover:-translate-y-1 transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden h-52">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050918]/50 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/95 text-[10px] font-black text-[#050918] uppercase tracking-widest">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>

                                        <h3 className="text-lg font-black text-[#050918] mb-3 leading-tight group-hover:text-[#1b18ff] transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">{post.excerpt}</p>

                                        {/* Author + Read link */}
                                        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <User className="w-3.5 h-3.5 text-slate-400" />
                                                <span className="text-xs font-bold text-slate-500">{post.author}</span>
                                            </div>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1 text-xs font-black text-[#1b18ff] group-hover:gap-2 transition-all"
                                            >
                                                Read <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-2">
                        {["1", "2", "3", "→"].map((p, i) => (
                            <button
                                key={p}
                                className={`w-11 h-11 rounded-xl border text-sm font-black transition-all ${p === "1"
                                        ? "bg-[#1b18ff] text-white border-[#1b18ff] shadow-md shadow-[#1b18ff]/30"
                                        : "bg-white border-slate-200 text-slate-400 hover:border-[#1b18ff] hover:text-[#1b18ff]"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#6B7FFF] mb-4">Stay Informed</p>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Get Weekly Tech Insights Delivered.
                        </h2>
                        <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                            Join 8,000+ technology leaders who receive our curated digest of enterprise tech news, deep dives, and strategic playbooks every week.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 h-12 rounded-xl px-5 bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1b18ff]/40 font-medium text-sm"
                            />
                            <button className="h-12 px-7 bg-[#1b18ff] text-white font-black text-sm rounded-xl hover:bg-[#4551FF] transition-colors shrink-0">
                                Subscribe →
                            </button>
                        </div>
                        <p className="text-xs text-slate-600 font-medium mt-4">No spam. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
