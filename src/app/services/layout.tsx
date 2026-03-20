import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Enterprise Technical Services",
    description: "Expert cybersecurity, digital marketing, and IT solutions tailored for modern businesses. Scale your growth with TechActive's practitioners.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
