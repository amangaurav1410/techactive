"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Linkedin, Twitter, Github, Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GradientButton } from "@/components/shared/GradientButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

const contactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    company: z.string().min(2, "Company name is required"),
    message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log("Form Data:", data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert("Thank you for your message. We will get back to you shortly!");
    };

    const contactInfo = [
        { label: "Email Us", value: "info@techactive.com", icon: Mail, href: "mailto:info@techactive.com" },
        { label: "Visit Us", value: "Sydney, Australia", icon: MapPin, href: "#" }
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                badge="Get In Touch"
                title={<>Let's <span className="text-[#3b82f6]">Innovate</span> Together.</>}
                subtitle="Ready to scale your enterprise technology? Get in touch for a free consultation with our experts."
                image="/img-contact.png"
            />

            <div className="bg-background pb-28">
                <div className="container mx-auto px-6 -mt-16 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card rounded-3xl p-8 md:p-12"
                            >
                                <h3 className="text-2xl font-black text-[#050918] mb-8 flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-[#3b82f6]" /> Send a Message
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                                            <Input placeholder="John Doe" className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white" {...register("name")} />
                                            {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                            <Input placeholder="john@company.com" className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white" {...register("email")} />
                                            {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Company Name</label>
                                        <Input placeholder="Acme Corp" className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white" {...register("company")} />
                                        {errors.company && <p className="text-xs text-red-500 font-bold">{errors.company.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                                        <Textarea placeholder="How can we help you?" className="min-h-[160px] rounded-2xl border-slate-200 bg-slate-50 focus:bg-white p-4" {...register("message")} />
                                        {errors.message && <p className="text-xs text-red-500 font-bold">{errors.message.message}</p>}
                                    </div>
                                    <GradientButton
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 font-black tracking-widest uppercase rounded-2xl flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? "Sending..." : <><span>Send Message</span><Send className="w-4 h-4" /></>}
                                    </GradientButton>
                                </form>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card rounded-3xl p-10 h-full relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#3b82f6]/20 rounded-full translate-x-16 -translate-y-16 blur-2xl" />

                                <h3 className="text-xl font-black text-[#050918] mb-8 uppercase tracking-tight">Contact Direct</h3>

                                <div className="space-y-8">
                                    {contactInfo.map((info, i) => (
                                        <a key={i} href={info.href} className="group block">
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-10 h-10 bg-[#3b82f6]/20 border border-[#3b82f6]/30 rounded-xl flex items-center justify-center group-hover:bg-[#3b82f6] transition-all duration-300">
                                                    <info.icon className="w-4 h-4 text-[#6B7FFF] group-hover:text-white transition-colors" />
                                                </div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-[#3b82f6] transition-colors">{info.label}</p>
                                            </div>
                                            <p className="text-[#050918] font-bold pl-14 leading-snug">{info.value}</p>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-10 pt-10 border-t border-white/10">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Follow Us</p>
                                    <div className="flex items-center gap-4">
                                        {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                                            <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#3b82f6] hover:text-white transition-all duration-300">
                                                <Icon className="w-4 h-4" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Location card */}
                                <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
                                    <div className="h-36 bg-[#3b82f6]/10 flex items-center justify-center">
                                        <div className="text-center space-y-3">
                                            <MapPin className="w-8 h-8 text-[#3b82f6] mx-auto animate-bounce" />
                                            <p className="text-[10px] uppercase font-black tracking-widest text-[#050918]/40">Sydney, Australia</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
