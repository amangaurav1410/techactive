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
                        ? "max-w-7xl glass rounded-2xl px-6 md:px-8 py-3 shadow-[0_8px_40px_rgba(27,24,255,0.1)]"
                        : "bg-background/70 backdrop-blur-md py-4 px-6 md:px-10 border-b border-[#3b82f6]/10"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/Logo-removebg-preview.png"
                            alt="TechActive Logo"
                            width={160}
                            height={44}
                            className="h-9 w-auto"
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
                                        ? "text-white bg-[#3b82f6]"
                                        : "text-slate-600 hover:text-[#3b82f6] hover:bg-[#3b82f6]/5"
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
                                Contact Us
                            </GradientButton>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-[#050918] p-2 rounded-lg hover:bg-[#3b82f6]/5 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 z-40 bg-background flex flex-col pt-24 px-8 pb-10 transition-all duration-300",
                mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#3b82f6]/20 rounded-full blur-[120px]" />

                <div className="mb-10">
                    <Image
                        src="/Logo-removebg-preview.png"
                        alt="TechActive"
                        width={140}
                        height={38}
                        className="h-8 w-auto"
                    />
                </div>

                <nav className="flex flex-col gap-2 relative z-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-2xl font-black py-4 border-b border-[#3b82f6]/10 transition-colors",
                                isActive(link.href) ? "text-[#3b82f6]" : "text-[#050918] hover:text-[#3b82f6]"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto relative z-10">
                    <Link href="/contact">
                        <GradientButton className="w-full h-14 text-sm font-black uppercase tracking-widest rounded-xl">
                            Contact Us
                        </GradientButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
