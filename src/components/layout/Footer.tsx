"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-background pt-24 pb-12 text-[#050918] border-t border-[#3b82f6]/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
                    {/* Logo & About */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo-removebg-preview.png"
                                alt="TechActive Logo"
                                width={160}
                                height={44}
                                className="h-9 w-auto"
                            />
                        </Link>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            Engineering high-velocity digital solutions for the next generation of industry leaders.
                        </p>
                        <div className="flex gap-5">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <Link key={i} href="#" className="text-slate-600 hover:text-[#3b82f6] transition-colors">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - Section 1 */}
                    <div className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#050918]">Capabilities</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Cybersecurity", href: "/services/cybersecurity" },
                                { name: "Web Development", href: "/services/web-development" },
                                { name: "Digital Marketing", href: "/services/digital-marketing" },
                                { name: "IT Services", href: "/services/it-services" },
                                { name: "SEO & SEM", href: "/services/seo-sem" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-[#3b82f6] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation - Section 2 */}
                    <div className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#050918]">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-[#3b82f6] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - Section 3 */}
                    <div className="space-y-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#050918]">Get in Touch</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                                <span className="text-sm font-medium text-slate-500">hello@techactive.digital</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                                <span className="text-sm font-medium text-slate-500">+1 (555) Tech-Active</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0" />
                                <span className="text-sm font-medium text-slate-500">123 Tech Center, Silicon Valley, CA</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#3b82f6] hover:translate-x-1 transition-all group">
                                Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
                        © {new Date().getFullYear()} TechActive Digital.
                    </p>
                    <div className="flex gap-10">
                        {["Privacy Policy", "Terms of Service"].map((text) => (
                            <Link key={text} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 hover:text-[#3b82f6] transition-colors">
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
