"use client";
import { motion } from "framer-motion";

export function FounderNoteSection() {
    return (
        <section className="py-32 md:py-48 bg-[#fcfcfc] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

                    {/* Left Column - Empty for generous whitespace or potential minimal image later */}
                    <div className="hidden md:block md:col-span-2"></div>

                    {/* Main Content Column */}
                    <div className="md:col-span-8 flex flex-col items-start text-left">

                        {/* Eyebrow */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 mb-8 block"
                        >
                            A note from the founder
                        </motion.span>

                        {/* Main Statement */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif leading-[1.1] text-gray-900 mb-16 max-w-4xl"
                        >
                            Narrative Artists was built for brands that care about how they’re understood — <br className="hidden md:block" />
                            <span className="text-gray-400 italic">not just how they’re ranked.</span>
                        </motion.h2>

                        {/* Body Copy */}
                        <div className="space-y-8 text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-3xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                I’ve spent years working inside the Amazon ecosystem — writing, structuring, and building content where decisions are made in seconds.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Over time, one thing became clear: most brand content isn’t wrong. It’s just loud, crowded, and forgettable.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Narrative Artists exists to do the opposite.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                We combine writing discipline with design thinking to create clarity — so products don’t just list features, they communicate intent.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="pl-6 border-l-2 border-gray-200"
                            >
                                <p className="italic text-gray-500">
                                    No hacks. No inflated promises. Just thoughtful structure, strong narratives, and work that respects the buyer’s attention.
                                </p>
                            </motion.div>
                        </div>

                        {/* Closing & Signature */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-20 pt-10 border-t border-gray-200 w-full max-w-xl"
                        >
                            <p className="text-2xl font-serif text-gray-900 mb-4">
                                Clarity isn’t minimalism. <br />
                                <span className="text-gray-500 italic">It’s understanding what matters — and leaving the rest out.</span>
                            </p>
                            <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mt-8">
                                — Founder, Narrative Artists
                            </p>
                        </motion.div>

                    </div>

                    {/* Optional Founder Photo Area (Right/Bottom) */}
                    <div className="hidden md:block md:col-span-2">
                        {/* Placeholder for future photo if needed, distinct from left spacing */}
                    </div>

                </div>
            </div>
        </section>
    );
}
