import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

import { Plus_Jakarta_Sans, Inter, Outfit } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://techactive.com"),
  title: {
    default: "TechActive | Cybersecurity, IT Solutions & Digital Marketing",
    template: "%s | TechActive"
  },
  description: "TechActive delivers premium cybersecurity, digital marketing, and enterprise IT solutions designed for modern businesses. Protect your infrastructure and scale your growth with practitioners.",
  keywords: ["cybersecurity", "digital marketing", "IT services", "web development", "SEO", "SEM", "tech solutions"],
  authors: [{ name: "TechActive Team" }],
  openGraph: {
    title: "TechActive | Cybersecurity, IT Solutions & Digital Marketing",
    description: "Enterprise-level tech solutions for modern businesses. Secure your systems and scale your growth.",
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
    title: "TechActive | Cybersecurity & Growth",
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
        className={`${plusJakartaSans.variable} ${inter.variable} ${outfit.variable} antialiased selection:bg-brand-blue selection:text-white font-inter`}
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

