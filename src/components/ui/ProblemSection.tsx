"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import Image from "next/image";

export function ProblemSection() {
    return (
        <section className="relative w-full py-[120px] bg-[#FDFCFB] overflow-hidden">
            <div className="container px-4 md:px-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <div>
                                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[1.5] mb-8">
                                    Why most brand <span className="bg-[#dcff0d] transform inline-block rounded-2xl p-2">content fails?</span>
                                </h2>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {[
                                { text: "Templates replace thinking", icon: X, color: "text-red-400" },
                                { text: "Features overwhelm instead of guiding", icon: X, color: "text-red-400" },
                                { text: "Brand voice disappears at the moment of choice", icon: X, color: "text-red-400" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                                    className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-[#1A1A1A]/5 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors`}>
                                        <item.icon className={`w-5 h-5 ${item.color}`} />
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl text-[#1A1A1A] font-light leading-snug">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="font-sans text-2xl md:text-3xl text-[#1A1A1A] mt-4 flex items-center gap-3"
                        >
                            <span className="w-12 h-[1px] bg-[#1A1A1A]" />
                            Buyers notice. <span className="font-serif italic text-[#dcff0d] bg-[#1A1A1A] px-2 py-1 transform -skew-x-12 inline-block">Even when sellers don’t.</span>
                        </motion.p>
                    </motion.div>

                    {/* Right Column: Visual Comparison with Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Comparison Split */}
                        <div className="absolute inset-0 flex">

                            {/* Visual A: Cluttered (Left Image) */}
                            <div className="w-1/2 h-full relative overflow-hidden bg-gray-100">
                                <Image
                                    src="/cluttered-layout.png"
                                    alt="Cluttered Layout"
                                    fill
                                    className="object-cover opacity-80 mix-blend-multiply scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Clutter Overlay Text */}
                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                    <p className="font-sans text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                        <X className="w-3 h-3" /> Cluttered
                                    </p>
                                </div>
                            </div>

                            {/* Visual B: Structured (Right Image) */}
                            <div className="w-1/2 h-full relative overflow-hidden bg-white border-l-4 border-white z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.1)]">
                                <Image
                                    src="/structured-layout.png"
                                    alt="Structured Layout"
                                    fill
                                    className="object-cover scale-100"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Structure Overlay Text */}
                                <div className="absolute bottom-8 right-8 bg-[#1A1A1A]/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                    <p className="font-sans text-xs font-bold text-[#dcff0d] uppercase tracking-wider flex items-center gap-2">
                                        <Check className="w-3 h-3" /> Structured
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Center Divider handle */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white z-20 flex items-center justify-center transform -translate-x-1/2">
                            <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1A1A1A]">
                                <div className="flex gap-[2px]">
                                    <ArrowLeft className="w-3 h-3" />
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
