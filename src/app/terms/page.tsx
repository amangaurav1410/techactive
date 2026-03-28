"use client";

import { PageHero } from "@/components/shared/PageHero";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                badge="Legal"
                title={<>Terms & <span className="text-[#3b82f6]">Conditions</span></>}
                subtitle="The terms governing your interaction with TechActive's platform and services."
                image="/img-contact.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card rounded-[3rem] p-12 md:p-20 space-y-12 text-slate-600 leading-relaxed font-medium"
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using our services, you (the "User") agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website. We reserve the right to change these terms at any time by posting changes online. Your continued use of the website after changes are posted constitutes your acceptance of this agreement as modified.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on TechActive's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Modify or copy the materials.</li>
                                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial).</li>
                                <li>Attempt to decompile or reverse engineer any software contained on TechActive's website.</li>
                                <li>Remove any copyright or other proprietary notations from the materials.</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">3. Disclaimer</h2>
                            <p>
                                The materials on TechActive's website are provided on an 'as is' basis. TechActive makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">4. Limitations</h2>
                            <p>
                                In no event shall TechActive or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechActive's website, even if TechActive or a TechActive authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black text-[#050918] uppercase tracking-tighter">5. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
