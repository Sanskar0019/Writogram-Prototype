"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreativeButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export function CreativeButton({ text, className, onClick, variant = 'primary' }: CreativeButtonProps) {

    const isPrimary = variant === 'primary';

    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative px-8 py-4 font-sans font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95",
                isPrimary
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A]",
                className
            )}
        >
            {/* Background Fill Animation */}
            <div className={cn(
                "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]",
                isPrimary ? "bg-[#dcff0d]" : "bg-[#1A1A1A]"
            )} />

            {/* Button Content */}
            <div className="relative z-10 flex items-center gap-2 overflow-hidden">

                {/* Initial Text */}
                <div className="relative h-6 overflow-hidden flex items-center">
                    <span className={cn(
                        "flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] group-hover:-translate-y-10 group-hover:opacity-0",
                        isPrimary ? "text-white" : "text-[#1A1A1A]"
                    )}>
                        {text}
                        {isPrimary && <ArrowRight className="w-4 h-4 ml-1" />}
                    </span>

                    {/* Hover Text */}
                    <span className={cn(
                        "absolute top-0 left-0 flex items-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]",
                        isPrimary ? "text-[#1A1A1A]" : "text-white"
                    )}>
                        {text}
                        {isPrimary && <ArrowRight className="w-4 h-4 ml-1" />}
                    </span>
                </div>

            </div>
        </button>
    );
}
