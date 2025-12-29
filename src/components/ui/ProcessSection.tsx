"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const steps = [
    {
        type: "image",
        src: "/images/process/understand.png",
        text: "Understand the product and brand context"
    },
    {
        type: "image",
        src: "/images/process/define.png",
        text: "Define the narrative and structure"
    },
    {
        type: "image",
        src: "/images/process/design.png",
        text: "Design layouts and copy systems"
    },
    {
        type: "image",
        src: "/images/process/refine.png",
        text: "Refine for clarity and consistency"
    }
];

export function ProcessSection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-gray-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] bg-gray-50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

                {/* Header / Context */}
                <div className="mb-32 text-center md:text-left relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-black" />
                        <span className="text-sm font-semibold tracking-widest uppercase text-black">The Process</span>
                    </motion.div>

                    <div className="relative overflow-hidden mb-8">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-7xl md:text-9xl font-serif tracking-tighter text-black"
                        >
                            Our Method
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-2xl md:text-4xl text-gray-800 font-medium max-w-3xl leading-snug"
                    >
                        A thoughtful, deliberate process that values <span className="text-gray-400">clarity</span>, <span className="text-gray-400">restraint</span>, and <span className="italic font-serif">craft</span>.
                    </motion.p>
                </div>

                {/* Steps Flow */}
                <div className="relative mb-40">
                    {/* Connecting Line (Desktop) */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-[40px] left-0 w-full h-[1px] bg-gray-200 hidden md:block"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                                className="relative flex flex-col items-start gap-8 group"
                            >
                                {/* Marker & Icon */}
                                <div className="relative">
                                    <div className="w-24 h-24 bg-white border border-gray-100 rounded-3xl flex items-center justify-center relative z-10 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                                        {/* Accent Border on Hover */}
                                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#dcff0d] transition-colors duration-500" />

                                        <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                                            <Image
                                                src={step.src}
                                                alt={step.text}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                    {/* Blob effect on hover */}
                                    <div className="absolute inset-0 bg-[#dcff0d] rounded-3xl blur-xl -z-10 scale-50 opacity-0 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500" />
                                </div>


                                {/* Text */}
                                <div className="space-y-4">
                                    <span className="block text-8xl font-serif font-bold text-gray-100 leading-none group-hover:text-[#dcff0d] transition-colors duration-500 select-none">
                                        0{i + 1}
                                    </span>
                                    <p className="text-xl font-medium text-gray-800 leading-snug pr-4 group-hover:text-black transition-colors duration-300">
                                        {step.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The End Statement: NO RUSH / SHORTCUTS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-20 border-t border-gray-100"
                >
                    {/* NO */}
                    <div className="relative group cursor-default">
                        <motion.h3
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="text-[10rem] md:text-[14rem] font-serif leading-none tracking-tighter text-black group-hover:text-transparent group-hover:stroke-[#dcff0d] group-hover:stroke-2 transition-all duration-500 bg-clip-text"
                            style={{ WebkitTextStroke: "0px black" }}
                        >
                            NO
                        </motion.h3>
                        {/* Hover reveal */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full whitespace-nowrap">Absolutely not.</span>
                        </div>
                    </div>

                    {/* Stacked Words */}
                    <div className="flex flex-col justify-center gap-2">
                        {["Rush", "Shortcuts"].map((word, i) => (
                            <div key={word} className="overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="block text-5xl md:text-7xl font-serif font-bold text-gray-300 hover:text-[#dcff0d] transition-colors duration-300 uppercase tracking-tighter cursor-crosshair"
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
