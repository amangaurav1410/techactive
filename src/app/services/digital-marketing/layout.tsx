import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing | Scale Your Growth",
    description: "High-impact digital marketing strategies designed for modern tech companies. Drive conversion, build brand authority, and scale your growth with TechActive.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
