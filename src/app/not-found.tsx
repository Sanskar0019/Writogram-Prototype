"use client";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            {/* Disconnected Plug Visual using SVG */}
            <div className="relative w-full max-w-md mx-auto mb-12 opacity-80">
                <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    {/* Left Cord & Plug */}
                    <path d="M-50 100 H 130" stroke="#111" strokeWidth="8" strokeLinecap="round" />
                    <path d="M130 70 H 160 V 130 H 130 V 70 Z" fill="white" stroke="#111" strokeWidth="6" strokeLinejoin="round" />
                    <path d="M160 85 H 175" stroke="#111" strokeWidth="6" strokeLinecap="round" />
                    <path d="M160 115 H 175" stroke="#111" strokeWidth="6" strokeLinecap="round" />

                    {/* Right Cord & Socket */}
                    <path d="M450 100 H 270" stroke="#111" strokeWidth="8" strokeLinecap="round" />
                    <path d="M270 60 H 220 V 140 H 270 V 60 Z" fill="white" stroke="#111" strokeWidth="6" strokeLinejoin="round" />
                    <circle cx="235" cy="100" r="40" stroke="#dcff0d" strokeWidth="0" fill="#dcff0d" className="animate-pulse opacity-20" />

                    {/* Sparks (indicating disconnection) */}
                    <g className="animate-bounce">
                        <path d="M190 70 L 200 50" stroke="#dcff0d" strokeWidth="4" strokeLinecap="round" />
                        <path d="M190 130 L 200 150" stroke="#dcff0d" strokeWidth="4" strokeLinecap="round" />
                        <path d="M205 100 L 215 100" stroke="#dcff0d" strokeWidth="4" strokeLinecap="round" />
                    </g>
                </svg>
            </div>

            <div className="text-center space-y-6">
                <h1 className="text-9xl font-serif text-black leading-none">404</h1>
                <h2 className="text-2xl font-medium text-gray-500">Connection Lost</h2>
                <p className="max-w-md text-gray-400 mx-auto">
                    The page you are looking for has been moved, deleted, or possibly never existed.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#dcff0d] hover:text-black transition-all duration-300 mt-8"
                >
                    <MoveLeft size={20} />
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
