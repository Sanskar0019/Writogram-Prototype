"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface FloatingCardProps {
    src: string;
    alt: string;
    className?: string; // For absolute positioning
    depth?: number; // How much parallax effect? 1 = normal, higher = faster
    rotation?: number; // Initial rotation
}

export function FloatingCard({ src, alt, className, depth = 1, rotation = 0 }: FloatingCardProps) {
    const { scrollY } = useScroll();
    // Transform scrollY to a movement value based on depth
    // The card will move slower or faster than the scroll
    const y = useTransform(scrollY, [0, 1000], [0, -100 * depth]);

    return (
        <motion.div
            style={{ y, rotate: rotation }}
            className={cn(
                "absolute",
                className
            )}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} // Cinematic entrance
        >
            <motion.div
                animate={{ y: [0, -15, 0] }} // Gentle float
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2 // Randomize phase
                }}
                className="relative"
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            >

                <div className={cn(
                    "shadow-2xl rounded-2xl overflow-hidden border border-white/50 backdrop-blur-sm",
                    "transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-background"
                )}>
                    <div className="relative">                                          
                        {/* Subtle overlay for glass effect if needed */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
                        <Image
                            src={src}
                            alt={alt}
                            width={400}
                            height={300}
                            className="w-auto h-auto max-w-[300px] md:max-w-[350px] object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

