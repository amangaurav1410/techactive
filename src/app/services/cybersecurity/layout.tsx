import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cybersecurity Solutions | Protect Your Enterprise",
    description: "Enterprise-grade cybersecurity services including threat detection, penetration testing, systems audits, and cloud security from TechActive experts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
