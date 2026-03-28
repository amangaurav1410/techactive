import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Join the TechActive Team",
    description: "Build the future of enterprise technology with TechActive. Explore our current job openings for cybersecurity analysts, software engineers, and digital marketing experts.",
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
