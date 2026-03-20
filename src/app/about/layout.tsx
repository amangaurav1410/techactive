import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Pioneering Enterprise Tech",
    description: "Learn about TechActive's mission to empower businesses through innovative technology and secure infrastructure. Our team of experts delivers high-impact solutions worldwide.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
