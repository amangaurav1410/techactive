import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Insights on Tech and Cybersecurity",
    description: "Read the latest insights, strategies, and industry news about cybersecurity, digital marketing, and enterprise IT from the TechActive experts.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
