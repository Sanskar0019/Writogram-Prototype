"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
    return (
        <section className="flex flex-col bg-[#1A1A1A] md:flex-row min-h-screen">

            {/* Left Side (Text) */}
            <div className="w-full md:w-1/2 bg-white px-8 py-20 md:px-20 md:py-32 flex flex-col justify-center rounded-br-4xl">
                <div className="max-w-xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif text-black leading-[0.9] tracking-tight mb-12"
                    >
                        Start a <br />
                        thoughtful <br />
                        conversation.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-12"
                    >
                        <p className="text-xl text-gray-800 leading-relaxed font-normal">
                            If you’re exploring how your brand shows up on Amazon—and care about clarity, structure, and storytelling—we’re happy to talk.
                        </p>

                        <div className="border-l-2 border-gray-200 pl-6 py-2">
                            <ul className="space-y-2 text-lg text-gray-600 font-medium">
                                <li>No pitches.</li>
                                <li>No pressure.</li>
                                <li>Just an honest exchange to see if there’s alignment.</li>
                            </ul>
                        </div>

                        <p className="text-sm text-gray-400 mt-12">
                            Not sure where to begin? That’s fine. Clarity often starts with a question.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-full md:w-1/2 bg-[#1A1A1A] px-8 py-20 md:px-20 md:py-32 flex flex-col justify-center text-white rounded-t-4xl">
                <div className="max-w-xl w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-12"
                    >
                        <span className="text-sm uppercase tracking-widest text-gray-400 block mb-2">Inquiry</span>
                        <h3 className="text-2xl font-normal text-gray-200">
                            Tell us a little about your brand, your product, and what you’re looking to improve.
                        </h3>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#dcff0d] transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="brand" className="text-xs uppercase tracking-wider text-gray-500">Brand / Company</label>
                                <input
                                    type="text"
                                    id="brand"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#dcff0d] transition-colors"
                                    placeholder="Brand name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#dcff0d] transition-colors"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="marketplace" className="text-xs uppercase tracking-wider text-gray-500">Amazon Marketplace (Optional)</label>
                            <input
                                type="text"
                                id="marketplace"
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#dcff0d] transition-colors"
                                placeholder="e.g. US, UK, DE"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500">Challenge / Goal</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#dcff0d] transition-colors resize-none"
                                placeholder="A short note about your product or challenge..."
                            />
                        </div>

                        <div className="pt-8 flex flex-col items-start gap-4">
                            <button type="submit" className="group flex items-center gap-3 bg-[#dcff0d] text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
                                Start the conversation
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <span className="text-xs text-gray-500">
                                We typically respond within 1–2 working days.
                            </span>
                        </div>

                    </motion.form>
                </div>
            </div>

        </section>
    );
}
