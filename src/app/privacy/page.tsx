"use client";

import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                badge="Legal"
                title={<>Privacy <span className="text-[#3b82f6]">Policy</span></>}
                subtitle="How we handle your data and protect your privacy at TechActive."
                image="/img-hero-cybersec.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card rounded-[3rem] p-12 md:p-20 space-y-12 text-slate-600 leading-relaxed font-medium"
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">1. Introduction</h2>
                            <p>
                                At TechActive, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">2. Data Collection</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">5. Contact Information</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                                <strong>Email:</strong> info@techactive.com <br />
                                <strong>Address:</strong> Sydney, Australia
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
