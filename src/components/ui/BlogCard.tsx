"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    category: string;
    image: string;
    date: string;
    slug: string;
}

export function BlogCard({ title, category, image, date, slug }: BlogCardProps) {
    return (
        <Link href={`/insights/${slug}`} className="group block h-full">
            <div className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 border border-gray-100">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-500">{date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#dcff0d] transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-gray-900 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
