"use client";

import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { TextReveal } from "./TextReveal";
import { CreativeButton } from "./CreativeButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-background rounded-b-[5rem] md:rounded-b-[10rem] border-b-3 border-[#dcff0d]">

            {/* Background radial gradient for subtle depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,231,98,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Text Content */}
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">

                {/* Massive Brand Name - Main Focus */}
                <div className="mb-6 mix-blend-darken">
                    <TextReveal
                        text="Narrative Artists"
                        className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] leading-none text-foreground tracking-tight"
                        delay={0.1}
                    />
                </div>

                {/* Sub-headline (Formerly Headline) */}
                <motion.div
                    className="font-sans text-xl md:text-3xl font-semibold mb-8 max-w-3xl text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    Crafting stories that <br className="block md:hidden " /> <span className="font-semibold border-b-2 border-[#dcff0d] text-gray-800 rounded-2xl bg-[#dcff0d] p-2">buyers understand.</span>
                </motion.div>

                <motion.p
                    className="font-sans text-base md:text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} // Delayed after text reveal
                >
                    We design <span className="font-semibold text-gray-800 rounded-xl bg-[#dcff0d] p-1">Amazon A+ content, Brand Stores, and brand storytelling systems</span> that bring clarity, consistency, and intention to how products are presented on <span className="font-semibold text-gray-800 rounded-xl bg-[#dcff0d] p-[4px]">Amazon.</span>
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                >
                    <CreativeButton text="View Transformations" />

                    <motion.button
                        className="px-8 py-4 border border-gray-800 text-gray-800 font-medium rounded-full relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Our Approach</span>
                        <div className="absolute inset-0 bg-[#dcff0d] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom     duration-300 ease-out" />
                    </motion.button>
                </motion.div>

                <motion.p
                    className="mt-12 text-xs text-gray-400 font-medium tracking-[0.2em] uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    Amazon-focused creative studio
                </motion.p>

            </div>

            {/* Visual Composition - Floating Cards */}
            <div className="hidden md:block relative w-full max-w-[1400px] h-[600px] mt-12 md:mt-20 mx-auto pointer-events-none">

                {/* Card 1: Left Top - A+ Content */}
                <FloatingCard
                    src="/mockup-1.png"
                    alt="Amazon A+ Content Mockup"
                    className="left-[2%] top-10 w-[180px] md:w-auto md:left-[10%] md:top-10 z-20"
                    rotation={-6}
                    depth={0.8}
                />

                {/* Card 2: Right Top - Brand Store - Slightly larger/dominant */}
                <FloatingCard
                    src="/mockup-2.png"
                    alt="Brand Store Mockup"
                    className="right-[2%] top-20 w-[200px] md:w-[350px] md:right-[5%] md:top-0 z-10"
                    rotation={6}
                    depth={1.2}
                />

                {/* Card 3: Left Bottom - Storytelling */}
                <FloatingCard
                    src="/mockup-3.png"
                    alt="Storytelling Component"
                    className="left-[5%] top-[20rem] w-[150px] md:w-auto md:left-[20%] md:top-96 z-30"
                    rotation={3}
                    depth={1.5}
                />

                {/* Card 4: Right Bottom - Detail */}
                <FloatingCard
                    src="/mockup-4.png"
                    alt="Product Detail Feature"
                    className="right-[5%] top-[18rem] w-[160px] md:w-auto md:right-[25%] md:top-80 z-20"
                    rotation={-4}
                    depth={0.5}
                />

            </div>

            {/* Ambient Fog from Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#dcff0d]/40 to-transparent blur-[80px] pointer-events-none z-0" />

        </section>
    );
}

