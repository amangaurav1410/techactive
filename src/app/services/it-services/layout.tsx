import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Global IT Services | Technical Infrastructure",
    description: "Enterprise IT services to optimize your engineering infrastructure. Secure, scalable, and built for modern business demands.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
