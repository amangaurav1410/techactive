import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | Join the Future of Secure Technology",
    description: "Explore career opportunities at TechActive. We're looking for elite engineers and cybersecurity specialists to build the future of secure technology.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
