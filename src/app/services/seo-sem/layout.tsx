import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO & SEM | Search Engine Dominance",
    description: "Build a dominant search presence with data-driven SEO and high-conversion SEM strategies from TechActive.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
