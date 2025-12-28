"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const philosophyPoints = [
    {
        title: "Clarity before creativity",
        number: "01",
        image: "/liquid-chrome-flow.png",
        bgClass: "bg-[#1A1A1A] text-white",
        accentClass: "text-[#dcff0d]",
        rotate: "0deg",
        description: "We strip away the non-essential until only the message remains."
    },
    {
        title: "Structure before style",
        number: "02",
        image: "/liquid-chrome-twist.png",
        bgClass: "bg-[#dcff0d] text-[#1A1A1A]",
        accentClass: "text-white",
        rotate: "45deg",
        description: "Transformation happens on a grid. Chaos is not a strategy."
    },
    {
        title: "Brand memory over noise",
        number: "03",
        image: "/liquid-chrome-splash.png",
        bgClass: "bg-white text-[#1A1A1A] border border-gray-200",
        accentClass: "text-[#1A1A1A]",
        rotate: "12deg",
        description: "We design for the second glance, not just the first impression."
    },
    {
        title: "Restraint as advantage",
        number: "04",
        image: "/liquid-chrome-flow.png", // Reuse flow with flip
        bgClass: "bg-[#252525] text-white",
        accentClass: "text-[#dcff0d]",
        rotate: "180deg",
        description: "Silence is louder than shouting. We use negative space as a weapon."
    }
];

export function PhilosophySection() {
    return (
        <section className="relative w-full py-[120px] bg-[#FDFCFB] overflow-hidden">
            <div className="container px-4 md:px-10 mx-auto">

                {/* Section Heading */}
                <div className="flex flex-col items-center text-center mb-20 md:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[1.5] max-w-5xl mx-auto"
                    >
                        Design is not decoration. <br />
                        <span className="italic text-[#1A1A1A] bg-[#dcff0d] p-2 rounded-xl ">It’s decision-making.</span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {philosophyPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.15, 1.00] }}
                            className={cn(
                                "relative group w-full aspect-[9/15] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2",
                                point.bgClass
                            )}
                        >
                            {/* Top Row: Number */}
                            <div className="flex justify-between items-start z-10 relative">
                                <span className={cn(
                                    "font-sans text-sm border border-current rounded-full px-3 py-1 opacity-70",
                                    point.accentClass === 'text-white' ? 'border-black/20' : 'border-white/20'
                                )}>
                                    {point.number}
                                </span>
                            </div>

                            {/* Middle: Liquid Chrome Visual (Shifted Up) */}
                            <div className="absolute top-0 left-0 w-full h-[70%] flex items-center justify-center p-4">
                                <motion.div
                                    className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{ rotate: point.rotate }}
                                >
                                    <Image
                                        src={point.image}
                                        alt="Abstract Liquid Chrome"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </motion.div>
                            </div>

                            {/* Bottom: Title & Description */}
                            <div className="relative z-10 flex flex-col gap-4 mt-auto pt-20">
                                <h3 className="font-serif text-3xl leading-none">
                                    {point.title}
                                </h3>
                                <p className={cn(
                                    "font-sans text-sm font-medium leading-relaxed",
                                    point.bgClass.includes('text-white') ? "text-gray-300" : "text-[#1A1A1A]/70"
                                )}>
                                    {point.description}
                                </p>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
