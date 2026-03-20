import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug.toLowerCase() === slug.toLowerCase());

    if (!post) return { title: "Post Not Found | TechActive" };

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            type: "article",
            images: [{ url: post.image }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
            images: [post.image],
        }
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug.toLowerCase() === slug.toLowerCase());

    if (!post) {
        notFound();
    }

    return (
        <BlogDetailClient post={post} />
    );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
