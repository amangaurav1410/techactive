"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { GradientButton } from "@/components/shared/GradientButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-500",
                    isScrolled ? "top-4 px-4 md:px-8" : "top-0 px-0"
                )}
            >
                <div className={cn(
                    "mx-auto transition-all duration-500 flex items-center justify-between",
                    isScrolled
                        ? "max-w-7xl bg-[#0b0f2f]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 md:px-8 py-3 shadow-[0_8px_40px_rgba(47,59,255,0.15)]"
                        : "bg-[#0b0f2f]/70 backdrop-blur-md py-4 px-6 md:px-10 border-b border-white/[0.06]"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/Logo-removebg-preview.png"
                            alt="TechActive Logo"
                            width={160}
                            height={44}
                            className="h-9 w-auto brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all duration-200",
                                    isActive(link.href)
                                        ? "text-white bg-white/10"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <GradientButton className="h-10 px-6 text-[11px] font-black uppercase tracking-widest rounded-xl">
                                Get a Free Quote
                            </GradientButton>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 z-40 bg-[#0b0f2f] flex flex-col pt-24 px-8 pb-10 transition-all duration-300",
                mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#2F3BFF]/20 rounded-full blur-[120px]" />

                <div className="mb-10">
                    <Image
                        src="/Logo-removebg-preview.png"
                        alt="TechActive"
                        width={140}
                        height={38}
                        className="h-8 w-auto brightness-0 invert"
                    />
                </div>

                <nav className="flex flex-col gap-2 relative z-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-2xl font-black py-4 border-b border-white/5 transition-colors",
                                isActive(link.href) ? "text-[#2F3BFF]" : "text-white hover:text-[#2F3BFF]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto relative z-10">
                    <Link href="/contact">
                        <GradientButton className="w-full h-14 text-sm font-black uppercase tracking-widest rounded-xl">
                            Get a Free Quote
                        </GradientButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
