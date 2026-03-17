import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import BlogClient from "./BlogClient";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
    title: "TechActive Journal | Insights on Cybersecurity, Marketing & IT",
    description: "Stay ahead with expert insights on enterprise technology, cybersecurity, digital marketing, and software engineering from the TechActive team.",
    openGraph: {
        title: "TechActive Journal | Tech & Marketing Insights",
        description: "Expert insights on enterprise technology, cybersecurity, and growth strategies.",
    }
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                badge="Industry Knowledge Hub"
                title={<>TechActive <span className="text-[#3b82f6]">Journal.</span></>}
                subtitle="Expert insights on enterprise technology, cybersecurity, cloud architecture, digital marketing, and engineering — written by practitioners, not theorists."
                image="/blog-hero.png"
            >
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {["Cybersecurity", "Cloud", "AI & ML", "Marketing", "Engineering"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-white/70 uppercase tracking-widest hover:bg-[#3b82f6]/30 hover:text-white transition-all cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </PageHero>

            <BlogClient posts={blogPosts} />

            {/* Newsletter CTA */}
            <section className="py-24 bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue mb-4">Stay Informed</p>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Get Weekly Tech Insights <br className="hidden md:block" /> Delivered to Your Inbox.
                        </h2>
                        <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
                            Join 8,000+ technology leaders who receive our curated digest of enterprise tech news, deep dives, and strategic playbooks every week.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 h-14 rounded-2xl px-6 bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/40 font-medium text-base transition-all"
                            />
                            <button className="h-14 px-10 bg-[#3b82f6] text-white font-black text-sm rounded-2xl hover:bg-brand-blue/80 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-blue/20 shrink-0 uppercase tracking-widest">
                                Subscribe Free
                            </button>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-6">No spam. Only high-signal intelligence. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
