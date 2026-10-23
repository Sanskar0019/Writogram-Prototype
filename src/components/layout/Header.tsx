"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  onOpenBetaModal?: (tier?: "beta" | "creator" | "founding") => void;
}

const navLinks = [
  { name: "What Is Writogram?", href: "#what-is-writogram" },
  { name: "Why Writogram?", href: "#why-writogram" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQs", href: "#faqs" },
];

export function Header({ onOpenBetaModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("What Is Writogram?");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onOpenBetaModal) {
      e.preventDefault();
      onOpenBetaModal("beta");
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 sm:px-10 md:px-14 ${
          isScrolled
            ? "bg-[#FFFCFF]/90 backdrop-blur-md py-4 border-b border-[#E4D9FC]/60 shadow-sm"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-1.5 group select-none"
            aria-label="Writogram Home"
          >
            <span
              className={`font-secondary font-bold text-2xl sm:text-[1.75rem] tracking-tight transition-colors ${
                isScrolled
                  ? "text-[#191621] group-hover:text-[#6C3BFF]"
                  : "text-white group-hover:text-[#EDE5FF]"
              }`}
            >
              Writogram
            </span>
            <span className="text-2xl font-bold text-[#8D5EFF] leading-none -translate-y-1">°</span>
          </Link>

          {/* Floating Pill Nav Bar */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center p-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
              isScrolled
                ? "bg-[#F4EFFC]/80 border border-[#E4D9FC]/80 shadow-inner"
                : "bg-black/35 border border-white/20 shadow-lg shadow-black/15"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? "bg-white text-[#191621] shadow-sm font-bold"
                        : "bg-white text-[#191621] shadow-md font-bold"
                      : isScrolled
                      ? "text-[#706A7C] hover:text-[#191621]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Pill Button with ↗ */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCtaClick}
              id="header-beta-btn"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer ${
                isScrolled
                  ? "bg-[#191621] hover:bg-[#6C3BFF] text-white"
                  : "bg-[#6C3BFF] hover:bg-[#5827E6] text-white shadow-lg shadow-[#6C3BFF]/30"
              }`}
            >
              <span>Access Beta</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors cursor-pointer active:scale-95 ${
              isScrolled
                ? "bg-[#F7F3FF] border border-[#E4D9FC] text-[#191621] shadow-sm"
                : "bg-black/40 border border-white/30 text-white backdrop-blur-md shadow-md"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#6C3BFF]" />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? "text-[#191621]" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-[#191621]/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav
          aria-label="Mobile Navigation"
          className="relative w-full bg-[#FFFCFF] border-b border-[#E4D9FC] pt-24 pb-8 px-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 px-4 font-secondary text-base sm:text-lg font-medium text-[#191621] hover:text-[#6C3BFF] hover:bg-[#F7F3FF] rounded-xl transition-colors active:scale-98"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EDE5FF] flex flex-col gap-3">
            <button
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleCtaClick(e);
              }}
              className="w-full py-3.5 px-6 bg-[#6C3BFF] hover:bg-[#5827E6] text-white rounded-full font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#6C3BFF]/25 active:scale-98 transition-all cursor-pointer"
            >
              <span>Access Beta</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
