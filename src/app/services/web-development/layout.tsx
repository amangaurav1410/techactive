import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "High-Velocity Web Development | Modern Apps",
    description: "Build robust, scalable web applications with TechActive's high-velocity engineering teams. Full-stack expertise for global brands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
