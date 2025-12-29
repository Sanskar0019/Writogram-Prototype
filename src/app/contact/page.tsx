"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, Loader2, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Collect checked services
        const services: string[] = [];
        if (formData.get("service_website")) services.push("Website design");
        if (formData.get("service_content")) services.push("Content creation");
        if (formData.get("brand_store")) services.push("Brand Store");
        if (formData.get("a_content")) services.push("A+ Content");
        if (formData.get("brand_story")) services.push("Brand Story");
        if (formData.get("ux_writing")) services.push("UX Writing");
        if (formData.get("graphic_designing")) services.push("Graphic Designing");
        if (formData.get("others")) services.push("Other");

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            services: services, // New field
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Failed to send");

            toast.success("Message sent! We'll be in touch soon.");
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Failed to send message. please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col md:flex-row gap-12 lg:gap-24">

                {/* Left Column: Contact Info */}
                <div className="w-full md:w-1/3 flex flex-col justify-between py-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                           

                            <div className="space-y-12 mt-16">
                                <div>
                                    <div className="flex items-center gap-3 mb-2 font-medium text-gray-900">
                                        <Mail size={18} />
                                        Chat to us
                                    </div>
                                    <p className="text-gray-500 mb-2 text-sm">Our friendly team is here to help.</p>
                                    <a href="mailto:hello@narrativeartists.com" className="text-gray-900 font-semibold hover:text-[#CAFF00] transition-colors">hello@narrativeartists.com</a>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-2 font-medium text-gray-900">
                                        <MapPin size={18} />
                                        Visit us
                                    </div>
                                    <p className="text-gray-500 mb-2 text-sm">Come say hello at our office HQ.</p>
                                    <p className="text-gray-900 font-semibold">
                                        100 Smith Street<br />
                                        Collingwood VIC 3066 AU
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 mb-2 font-medium text-gray-900">
                                        <Phone size={18} />
                                        Call us
                                    </div>
                                    <p className="text-gray-500 mb-2 text-sm">Mon-Fri from 8am to 5pm.</p>
                                    <a href="tel:+15550000000" className="text-gray-900 font-semibold hover:text-[#CAFF00] transition-colors">+1 (555) 000-0000</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 mt-12"
                    >
                        <a href="#" className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><Instagram size={20} /></a>
                    </motion.div>
                </div>

                {/* Right Column: Green Form Card */}
                <div className="w-full md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#dcff0d] rounded-[3rem] p-8 md:p-16 h-full text-[#1A1A1A]"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
                            Got ideas? We’ve got the skills. <br /> Let’s team up.
                        </h1>
                        <p className="text-lg md:text-xl opacity-80 mb-12">
                            Tell us more about yourself and what you're got in mind.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
                            <div className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@company.com"
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl placeholder-black/50 focus:outline-none focus:border-black transition-colors"
                                />
                                <textarea
                                    name="message"
                                    required
                                    rows={1}
                                    placeholder="Tell us a little about the project..."
                                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl placeholder-black/50 focus:outline-none focus:border-black transition-colors resize-none h-auto min-h-[60px]"
                                />
                            </div>

                            <div className="pt-8 space-y-4">
                                <p className="font-medium text-lg">How can we help?</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "service_website", label: "Website design" },
                                        { id: "service_content", label: "Content creation" },
                                        { id: "ux_writing", label: "UX Writing" },
                                        { id: "brand_story", label: "Brand Story" },
                                        { id: "brand_store", label: "Brand Store" },
                                        { id: "graphic_designing", label: "Graphic Designing" },
                                        { id: "a_content", label: "A+ Content" },
                                        { id: "others", label: "Others" },
                                    ].map((service) => (
                                        <label key={service.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input type="checkbox" name={service.id} className="peer sr-only" />
                                                <div className="w-6 h-6 border-2 border-black rounded-full peer-checked:bg-black transition-colors"></div>
                                                <svg className="w-4 h-4 text-[#dcff0d] absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{service.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#1A1A1A] text-white font-bold text-lg py-5 rounded-xl hover:bg-black transition-transform hover:scale-[1.01] active:scale-[0.99] mt-8 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Let's get started!"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
