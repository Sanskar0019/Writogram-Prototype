"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Timelines vary by scope. A single A+ Content module set usually takes 1-2 weeks from concept to final delivery. Full Brand Stores or comprehensive Story Systems typically require 3-5 weeks to ensure every detail is perfect."
    },
    {
        question: "Do you write the copy or do we provide it?",
        answer: "We handle it. We believe narrative and design are inseparable. Our process includes deep-dive research to write benefit-led, SEO-optimized copy that speaks your brand's voice while converting customers."
    },
    {
        question: "What makes 'Premium' A+ different?",
        answer: "Premium A+ offers wider modules, interactive hotspots, video integration, and carousel features that standard A+ lacks. It provides a much richer, website-like experience directly on the product detail page."
    },
    {
        question: "How does the revision process work?",
        answer: "We include two rounds of consolidated revisions in every engagement. We present work live or via loom to explain our strategic choices, then collaborate with you to refine the details until they're sharp."
    },
    {
        question: "Do you work with existing brand assets?",
        answer: "Absolutely. We can strictly adhere to your existing brand guidelines, or if you're looking to evolve, we can help push your visual identity into new territory specifically for the Amazon channel."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Header & CTA Card */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="h-1 w-12 bg-[#dcff0d] mb-6" />
                            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
                                Frequently asked <br />
                                <span className="italic text-gray-400">questions</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-md">
                                Everything you need to know about how we craft narratives that convert.
                            </p>
                        </motion.div>

                        {/* CTA Card matching reference */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#dcff0d] group-hover:text-gray-900 transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                                <p className="text-gray-500 mb-8 max-w-xs">
                                    Can't find the answer you're looking for? Send us an email and we'll get back to you.
                                </p>

                                <a
                                    href="mailto:hello@narrativeartists.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-[#dcff0d] hover:text-black transition-all duration-300"
                                >
                                    Get in touch
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            {/* Decorative Gradient Blob */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#dcff0d] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-gray-200 shadow-lg' : 'border-transparent hover:bg-white hover:shadow-sm'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                    >
                                        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#dcff0d] text-gray-900 rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 pt-0 text-gray-500 leading-relaxed text-base md:text-lg max-w-2xl">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
