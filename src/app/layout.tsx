import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TechActive | Secure Your Business. Scale Your Growth.",
  description: "TechActive delivers premium cybersecurity, digital marketing, and IT solutions designed for modern businesses. Scale your growth with enterprise-grade technology.",
  keywords: ["cybersecurity", "digital marketing", "IT services", "web development", "SEO", "SEM", "tech solutions"],
  authors: [{ name: "TechActive Team" }],
  openGraph: {
    title: "TechActive | Secure Your Business. Scale Your Growth.",
    description: "Enterprise-level tech solutions for modern businesses.",
    url: "https://techactive.com",
    siteName: "TechActive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechActive | Secure Your Business",
    description: "Premium IT solutions and cybersecurity services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased selection:bg-brand-blue selection:text-white font-inter`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>

  );
}

