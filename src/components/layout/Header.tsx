"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Approach", href: "#approach" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6",
                    isScrolled
                        ? "bg-[#FDFCFB]/80 backdrop-blur-xl py-4 shadow-sm"
                        : "bg-transparent py-8"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-[1600px] mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-8 h-8 bg-[#1A1A1A] text-[#dcff0d] flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-500 group-hover:rotate-180">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className={cn(
                            "font-serif text-xl font-normal tracking-tight transition-colors duration-300",
                            isMobileMenuOpen ? "text-[#1A1A1A]" : "text-[#1A1A1A]"
                        )}>
                            Narrative Artists
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10 bg-[#1A1A1A]/5 px-8 py-3 rounded-full backdrop-blur-sm border border-[#1A1A1A]/5 h-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group font-sans text-sm font-bold tracking-wide text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors h-5 overflow-hidden"
                            >
                                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-5">
                                    <span className="flex items-center justify-center h-5">{link.name}</span>
                                    <span className="flex items-center justify-center h-5 text-[#1A1A1A] font-extrabold">{link.name}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center z-50">
                        <Link
                            href="#start"
                            className="group relative px-6 py-3 bg-[#1A1A1A] text-white font-sans text-xs font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-[#dcff0d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <div className="relative flex items-center gap-2 group-hover:text-[#1A1A1A] transition-colors duration-300">
                                Book a call
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </Link>
                    </div>


                    {/* Theme Toggle */}
                    <div className="hidden md:flex items-center ml-4">
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 w-10 h-10 flex items-center justify-center bg-[#1A1A1A]/5 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                </div>
            </motion.header>

            {/* Full Screen Mobile Menu */}
            <motion.div
                className="fixed inset-0 bg-[#FDFCFB] z-40 md:hidden flex flex-col items-center justify-center gap-8"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none"
                }}
                transition={{ duration: 0.4 }}
            >
                <div className="flex flex-col gap-6 text-center">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                                y: isMobileMenuOpen ? 0 : 20,
                                opacity: isMobileMenuOpen ? 1 : 0
                            }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                        >
                            <Link
                                href={link.href}
                                className="font-serif text-4xl font-normal text-[#1A1A1A] hover:text-[#dcff0d] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                        y: isMobileMenuOpen ? 0 : 20,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="#start" className="mt-8 px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-sans text-sm uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                        Book a call
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}
