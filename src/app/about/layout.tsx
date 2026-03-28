import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Enterprise Technology Partner",
    description: "Learn about TechActive's mission to empower businesses through innovative technology, secure infrastructure, and high-velocity engineering.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
