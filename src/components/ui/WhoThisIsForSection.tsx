"use client";
import { motion } from "framer-motion";

export function WhoThisIsForSection() {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Section Title - Pill Style */}
                <div className="mb-24 flex flex-col items-start gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="border border-gray-300 rounded-full px-6 py-2 bg-white"
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                            Qualifications
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight max-w-5xl"
                    >
                        <span className="inline-block border border-gray-300 rounded-full px-8 py-2 mb-2 mr-3 bg-white shadow-sm">Who this is for</span>
                        <span className="text-gray-400 italic font-serif">(and isn’t)</span>
                    </motion.h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">

                    {/* Left Column: This Works Well For (Positive/Active) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group"
                    >
                        {/* Decorative Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0ff9f] opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-40 transition-opacity duration-700" />

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-[#dcff0d] flex items-center justify-center text-black font-bold text-lg">
                                ✓
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-gray-900">
                                This Works Well For
                            </h3>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            {[
                                "Brand-registered Amazon sellers",
                                "Founders who value design and storytelling",
                                "Teams thinking long-term"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="border border-gray-200 rounded-full px-8 py-4 text-xl md:text-2xl font-medium text-gray-800 bg-[#faf9f6]/50 hover:bg-white hover:border-[#dcff0d] hover:shadow-md transition-all duration-300 cursor-default flex items-center justify-between group/item"
                                >
                                    {item}
                                    <span className="opacity-0 group-hover/item:opacity-100 text-[#dcff0d] transition-opacity duration-300">→</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Not a Fit For (Muted/Inactive) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-[#f3f4f6] rounded-[3rem] p-8 md:p-12 border border-transparent shadow-inner relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-10 opacity-60">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg">
                                ✕
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-gray-600">
                                Not a Fit For
                            </h3>
                        </div>

                        <ul className="space-y-4 opacity-60">
                            {[
                                "Sellers chasing quick hacks",
                                "Template-only expectations",
                                "Lowest-price decision makers"
                            ].map((item, i) => (
                                <li key={i} className="border border-gray-300 rounded-full px-8 py-4 text-xl md:text-2xl font-medium text-gray-500 bg-transparent cursor-not-allowed decoration-gray-400">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
