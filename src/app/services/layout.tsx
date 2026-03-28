import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Cybersecurity, IT & Digital Solutions",
    description: "Explore TechActive's enterprise capabilities including cybersecurity, cloud infrastructure, digital marketing, and high-velocity web development.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
