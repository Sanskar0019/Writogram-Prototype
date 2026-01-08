"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 md:pt-32 flex flex-col justify-between min-h-[80vh] relative overflow-hidden ">

            {/* Top Content */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-6xl font-serif text-white mb-2">Narrative Artists</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                A creative studio shaping how brands are understood.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 space-y-6">
                        <span className="text-xs uppercase tracking-widest text-[#555] block mb-6">Explore</span>
                        <ul className="space-y-4">
                            {["Work", "Brand Transformations", "Our Approach", "Services"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-[#dcff0d] transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <span className="text-xs uppercase tracking-widest text-[#555] block mb-6">Studio</span>
                        <ul className="space-y-4">
                            {["About", "Founder Note", "Insights"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-[#dcff0d] transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right">
                        <span className="text-xs uppercase tracking-widest text-[#555] block mb-6 md:mb-8">Contact</span>
                        <Link href="mailto:hello@narrativeartists.co" className="group flex items-center gap-2 text-2xl md:text-3xl font-serif hover:text-[#dcff0d] transition-colors mb-6">
                            Start a conversation
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                        <p className="text-gray-500 text-sm mb-6">hello@narrativeartists.co</p>

                        <div className="flex gap-6 mt-4">
                            <Link href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">LinkedIn</Link>
                            <Link href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Instagram</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Middle Statement */}
            <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 relative z-10">
                <div className="border-t border-white/10 pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-200 mb-8 max-w-lg">
                            We design Amazon A+ content, Brand Stores, and brand storytelling systems for teams that value clarity, structure, and thoughtful design.
                        </p>
                        <ul className="space-y-1 text-gray-500 text-sm">
                            <li>No templates.</li>
                            <li>No noise.</li>
                            <li>Just work that respects attention.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <p className="text-sm text-gray-400 text-right italic mb-2">
                            Amazon-focused. Brand-led. Intentionally restrained.
                        </p>
                        <p className="text-[10px] text-[#333] uppercase tracking-widest mt-8">
                            Clarity is a choice.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Brand Bar */}
            <div className="w-full bg-[#1A1A1A] pt-4 pb-2 md:pt-6 md:pb-4 relative overflow-hidden group hover:bg-[#dcff0d] transition-colors duration-500">
                {/* Legal Strip (Top of bar) */}
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] md:text-xs font-sans font-bold text-gray-500 group-hover:text-black uppercase tracking-wider mb-2 md:mb-0 relative z-20 transition-colors duration-500">
                    <div className="flex gap-4">
                        <span>© Narrative Artists</span>
                        <span className="hidden md:inline">All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms</Link>
                    </div>
                </div>

                {/* Massive Text */}
                <h1 className="text-[18vw] md:text-[18vw] leading-[0.75] font-black tracking-tighter text-white group-hover:text-black text-center select-none pointer-events-none transform translate-y-2 md:translate-y-4 transition-colors duration-500">
                    NARRATIVE
                </h1>
            </div>

        </footer>
    );
}
