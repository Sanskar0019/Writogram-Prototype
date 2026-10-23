"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#F5EFFB] text-[#191621] overflow-hidden pt-8 sm:pt-12 border-t border-[#E4D9FC]/70 selection:bg-[#EDE5FF] selection:text-[#4520A8]">
      {/* Editorial Parchment Noise / Paper Texture Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#6C3BFF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      {/* Editorial Headline & Story Presentation */}
      <div className="max-w-4xl mx-auto px-6 text-center pt-16 sm:pt-24 pb-6 sm:pb-8 relative z-20">
        {/* Issue Number Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[#E4D9FC] text-[10px] sm:text-xs font-secondary font-bold tracking-[0.2em] uppercase text-[#706A7C] mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#6C3BFF]" />
          <span>WRITOGRAM &bull; ISSUE N&deg;01</span>
        </div>

        {/* Main Headline (Mukta Mahee bold + Kaushan Script cursive) */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight leading-[1.08] text-[#191621] font-bold mb-6">
          <span className="font-secondary block">The ideas worth</span>
          <span className="font-primary font-normal text-[#6C3BFF] block mt-1 sm:mt-2 italic">
            holding close.
          </span>
        </h2>

        {/* Supporting Editorial Paragraph */}
        <p className="font-secondary text-sm sm:text-base md:text-lg text-[#5A5366] max-w-xl mx-auto leading-relaxed mb-8">
          A calm social sanctuary where thoughts, poems, stories, and personal journals find an attentive audience without competing against dopamine loops and video feeds.
        </p>

        {/* Action CTAs (No newsletter form) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-4">
          <a
            href={siteConfig.links.betaApp}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-access-beta-btn"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#191621] hover:bg-[#6C3BFF] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#191621]/15 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>Access Beta Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#191621] border border-[#E4D9FC] text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:border-[#6C3BFF]"
          >
            <Instagram className="w-4 h-4 text-[#6C3BFF]" />
            <span>Follow @writogram</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          FULL-WIDTH ARTISTIC PORTRAIT (Edge-to-Edge like reference)
          ========================================================================= */}
      <div className="relative w-full h-[440px] sm:h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden -mt-6 sm:-mt-10">
        <Image
          src="/footer-artistic-portrait.jpg"
          alt="Artistic painting of contemplative thinker in lavender watercolor pool"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />

        {/* Seamless top blend with parchment background */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F5EFFB] via-[#F5EFFB]/75 to-transparent pointer-events-none" />

        {/* Bottom vignette over deep water to anchor the text */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-36 bg-gradient-to-t from-[#191621]/95 via-[#191621]/60 to-transparent pointer-events-none" />

        {/* Floating Bottom Bar Over the Water Surface */}
        <div className="absolute bottom-5 sm:bottom-6 inset-x-0 max-w-7xl mx-auto px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs text-white/95 font-secondary drop-shadow-md z-10 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Writogram™</span>
            <span>&bull;</span>
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>

          <div className="font-primary text-base sm:text-xl text-[#EDE5FF] drop-shadow-lg">
            &ldquo;Where thoughts find their voice.&rdquo;
          </div>

          <div className="flex items-center gap-5">
            <a href="#what-is-writogram" className="hover:text-white transition-colors">
              Top &uarr;
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.links.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
