import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Get in Touch for a Consultation",
    description: "Ready to scale your enterprise technology? Contact TechActive for a free consultation. Based in Sydney, we're your partner for cybersecurity and growth.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
