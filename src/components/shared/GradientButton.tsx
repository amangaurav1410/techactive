"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export function GradientButton({ children, className, variant = "primary", ...props }: GradientButtonProps) {
  if (variant === "outline") {
    return (
      <Button
        variant="outline"
        className={cn(
          "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300",
          className
        )}
        {...(props as any)}
      >
        {children}
      </Button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "bg-brand-gradient text-white px-6 py-2 rounded-md font-medium shadow-lg hover:shadow-brand-blue/30 transition-all duration-300",
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
