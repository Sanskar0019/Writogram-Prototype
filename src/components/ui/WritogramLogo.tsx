import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "purple";
  size?: "sm" | "md" | "lg";
}

export function WritogramLogo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const textColor =
    variant === "light"
      ? "text-white"
      : variant === "purple"
      ? "text-[#6C3BFF]"
      : "text-[#191621]";

  const subColor =
    variant === "light"
      ? "text-purple-200"
      : variant === "purple"
      ? "text-[#4520A8]"
      : "text-[#706A7C]";

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link
      href="/"
      id="brand-logo"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 ${className}`}
      aria-label="Writogram - Home"
    >
      {/* Literary Monogram / Ink & Page Quill Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#6C3BFF] to-[#4520A8] p-1.5 flex items-center justify-center shadow-md shadow-[#6C3BFF]/20 group-hover:scale-105 transition-transform duration-300 text-white`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stylized 'W' shaped like opening book leaves and quill nib */}
          <path
            d="M4 19L7.5 5L12 16L16.5 5L20 19"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="1.5" fill="#EDE5FF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-secondary tracking-tight font-bold ${textSizes[size]} ${textColor} leading-none`}
        >
          Writogram
        </span>
        <span className={`text-[10px] tracking-widest uppercase font-secondary font-bold ${subColor} mt-0.5`}>
          For Words
        </span>
      </div>
    </Link>
  );
}
