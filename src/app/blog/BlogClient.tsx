"use client";

import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/data/blog";

interface BlogClientProps {
    posts: BlogPost[];
}

const categories = ["All", "Cybersecurity", "Marketing", "IT Solutions", "Development", "SEO"];

export default function BlogClient({ posts }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredPost = posts.find(p => p.featured) || posts[0];
    const regularPosts = posts.filter(p => p.slug !== featuredPost.slug);

    const filteredPosts = regularPosts.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* Featured Article */}
            <section className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-[2px] bg-[#3b82f6]" />
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#3b82f6]">Editor's Pick</p>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[16/10]">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#050918]/50 to-transparent" />
                            <div className="absolute top-6 left-6">
                                <span className="px-4 py-1.5 rounded-full bg-[#3b82f6] text-xs font-black text-white uppercase tracking-widest">
                                    {featuredPost.category}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#050918] leading-[1.08] group-hover:text-[#3b82f6] transition-colors duration-500">
                                {featuredPost.title}
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                                    <User className="w-6 h-6 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-[#050918]">{featuredPost.author}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{featuredPost.authorRole}</p>
                                </div>
                                <div className="ml-auto inline-flex items-center gap-2 text-sm font-black text-[#3b82f6] group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Filters */}
            <section className="py-6 bg-white border-b border-slate-100 sticky top-[70px] z-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${activeCategory === cat
                                        ? "bg-[#3b82f6] text-white shadow-md shadow-[#3b82f6]/30"
                                        : "bg-white border border-slate-200 text-slate-500 hover:text-[#3b82f6] hover:border-[#3b82f6]/20"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full h-10 bg-white border border-slate-200 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 font-medium text-slate-600 placeholder:text-slate-400"
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
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#3b82f6]/5 hover:-translate-y-1 transition-all duration-500"
                                >
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

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>

                                        <h3 className="text-lg font-black text-[#050918] mb-3 leading-tight group-hover:text-[#3b82f6] transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6 line-clamp-3">{post.excerpt}</p>

                                        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <User className="w-3.5 h-3.5 text-slate-400" />
                                                <span className="text-xs font-bold text-slate-500">{post.author}</span>
                                            </div>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-1 text-xs font-black text-[#3b82f6] group-hover:gap-2 transition-all"
                                            >
                                                Read <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
