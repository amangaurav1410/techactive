"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export function FloatingCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-[100]"
        >
            <Link href="/contact" className="group flex items-center gap-3 bg-brand-gradient text-white p-4 rounded-full shadow-2xl shadow-brand-blue/30 lg:px-6">
                <MessageSquare className="w-6 h-6" />
                <span className="hidden lg:inline font-bold uppercase tracking-widest text-xs">Book Free Consultation</span>
            </Link>
        </motion.div>
    );
}
