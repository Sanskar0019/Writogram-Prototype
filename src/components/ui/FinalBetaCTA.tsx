"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface FinalBetaCTAProps {
  onOpenBetaModal?: (tier?: "beta" | "creator" | "founding") => void;
}

export default function FinalBetaCTA({ onOpenBetaModal }: FinalBetaCTAProps) {
  const handleLaunch = () => {
    if (onOpenBetaModal) {
      onOpenBetaModal("beta");
    } else {
      window.open(siteConfig.links.betaApp, "_blank");
    }
  };

  return (
    <section className="relative min-h-[650px] md:min-h-[750px] py-24 md:py-36 text-white overflow-hidden bg-[#191621] flex items-center selection:bg-[#EDE5FF] selection:text-[#4520A8]">
      {/* =========================================================================
          BACKGROUND ARTWORK: Boy & Dog under Starry Twilight Sky
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/final-cta-bg.jpg"
          alt="Contemplative boy and dog under dreamy purple starry twilight sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-right"
        />

        {/* Gradient Contrast Overlay: Deep ink violet on left for pristine typography readability, natural artwork on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#191621]/95 via-[#191621]/80 sm:via-[#191621]/70 sm:via-55% to-[#191621]/20" />

        {/* Top Fade from Previous Section */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#191621] via-[#191621]/60 to-transparent" />

        {/* Bottom Fade to Footer */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#191621] via-[#191621]/70 to-transparent" />

        {/* Ambient Purple Tint */}
        <div className="absolute inset-0 bg-[#6C3BFF]/10 mix-blend-color" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-left"
        >
          {/* Supporting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#EDE5FF] text-xs font-semibold tracking-widest uppercase mb-7 shadow-lg shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-[#EDE5FF] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#EDE5FF]" />
            <span>Beta Is Live</span>
          </div>

          {/* Headline */}
          <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.06] tracking-tight mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Ready to start <br />
            <span className="font-primary font-normal text-[#EDE5FF] text-4xl sm:text-6xl md:text-7xl lg:text-8xl block mt-1 drop-shadow-[0_8px_35px_rgba(108,59,255,0.7)]">
              writing?
            </span>
          </h2>

          {/* Copy */}
          <p className="font-secondary text-sm sm:text-lg md:text-xl text-white/95 font-light leading-relaxed mb-8 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Writogram Beta is now live. Open the app and begin sharing your thoughts, stories, and poems with people who genuinely read.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
            <button
              onClick={handleLaunch}
              id="final-launch-app-btn"
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#6C3BFF] hover:bg-[#5827E6] text-white text-base sm:text-lg font-secondary font-semibold flex items-center justify-center gap-2.5 shadow-[0_12px_40px_rgba(108,59,255,0.5)] hover:shadow-[0_16px_50px_rgba(108,59,255,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Launch the App Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={siteConfig.links.betaApp}
              target="_blank"
              rel="noopener noreferrer"
              id="direct-app-link"
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-secondary font-semibold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-black/20 hover:border-[#EDE5FF]"
            >
              <span>Direct Web App</span>
              <ExternalLink className="w-4 h-4 text-purple-200" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-white/80 font-secondary flex items-center gap-2 drop-shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EDE5FF]" />
            <span>No endless feed algorithms &bull; Designed exclusively for literary minds</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { FinalBetaCTA };
