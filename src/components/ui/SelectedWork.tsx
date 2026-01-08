"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const workItems = [
    {
        type: "Brand Store",
        title: "Bioart",
        descriptor: "Calm, navigable, and consistent.",
        cta: "View Store",
        image: "/images/selectedworks/1.png",
        color: "#fffaeb"
    },
    {
        type: "Brand Store",
        title: "Brewey Coffee",
        descriptor: "Clarity over clutter.",
        cta: "View Content",
        image: "/images/selectedworks/2.png",
        color: "#f0fdf4"
    },
    {
        type: "Brand Store",
        title: "Island",
        descriptor: "Comparison tables & lifestyle visuals.",
        cta: "View Premium",
        image: "/images/selectedworks/3.png",
        color: "#eff6ff"
    },
    {
        type: "Brand Store",
        title: "Baby Care",
        descriptor: "Guiding discovery gently.",
        cta: "Explore Store",
        image: "/api/placeholder/600/400",
        color: "#fff1f2"
    },
    {
        type: "Amazon A+",
        title: "Personal Care",
        descriptor: "Simplifying choice.",
        cta: "View Content",
        image: "/api/placeholder/600/400",
        color: "#faf5ff"
    },
    {
        type: "Brand Store",
        title: "Home Decor",
        descriptor: "Storytelling through layout.",
        cta: "Visit Store",
        image: "/api/placeholder/600/400",
        color: "#ecfccb"
    },
    {
        type: "Premium A+",
        title: "Electronics",
        descriptor: "Informed decision-making.",
        cta: "View Premium",
        image: "/api/placeholder/600/400",
        color: "#f8fafc"
    },
    {
        type: "Amazon A+",
        title: "Wellness",
        descriptor: "Consistency across SKUs.",
        cta: "View Content",
        image: "/api/placeholder/600/400",
        color: "#fff7ed"
    }
];

function BentoCard({ item, className = "" }: { item: any; className?: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${className}`}
            style={{ backgroundColor: item.color }}
        >
            <div className="relative h-full p-6 flex flex-col">
                {/* Image */}
                <div className="relative flex-1 rounded-2xl overflow-hidden mb-4">
                    <motion.img
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.4 }}
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-gray-600 opacity-70">
                        {item.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {item.title}
                    </h3>
                </div>

                {/* Hover CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-6 right-6"
                >
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-900" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="rounded-3xl p-8 shadow-lg"
            style={{ backgroundColor: color }}
        >
            <div className="flex items-end gap-2 mb-2">
                <h3 className="text-6xl font-black text-gray-900 leading-none">{number}</h3>
                <span className="text-2xl text-gray-900 mb-2">⌐</span>
            </div>
            <p className="text-lg font-semibold text-gray-700">{label}</p>
        </motion.div>
    );
}

export default function SelectedWork() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="min-h-screen bg-background py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-7xl md:text-8xl font-serif text-gray-900 mb-4 leading-none">
                        Selected
                        <br />
                        Work
                    </h1>
                    <p className="text-xl text-gray-600 max-w-xl">
                        Crafting exceptional shopping experiences on Amazon's platform.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"
                >
                    {/* Large Featured Card - Top Left */}
                    <div className="md:col-span-2 md:row-span-2">
                        <BentoCard item={workItems[0]} className="h-[500px]" />
                    </div>

                    {/* Stats Cards - Top Right */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        <StatCard number="251" label="Projects" color="#dcff0d" />
                        <StatCard number="156" label="Awards" color="#a78bfa" />
                    </div>

                    {/* Medium Cards - Middle Right */}
                    <BentoCard item={workItems[1]} className="h-[240px]" />
                    <BentoCard item={workItems[2]} className="h-[240px]" />

                    {/* Medium Cards - Bottom Row */}
                    <BentoCard item={workItems[3]} className="h-[280px]" />
                    <BentoCard item={workItems[4]} className="h-[280px]" />

                    {/* Large Card - Bottom Right */}
                    <div className="md:col-span-2">
                        <BentoCard item={workItems[5]} className="h-[280px]" />
                    </div>
                </motion.div>

                {/* Second Row of Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
                >
                    <BentoCard item={workItems[6]} className="h-[320px]" />
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg flex flex-col justify-between h-[320px]">
                        <div>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                                <span className="text-3xl">🍎</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Global Clients</h3>
                            <p className="text-gray-400">Working with brands worldwide</p>
                        </div>
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <span>View all</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                    <BentoCard item={workItems[7]} className="h-[320px]" />
                </motion.div>

                {/* Footer Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg text-sm text-gray-700 font-medium">
                        <span>All projects live on Amazon</span>
                        <div className="w-2 h-2 rounded-full bg-[#dcff0d] animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}