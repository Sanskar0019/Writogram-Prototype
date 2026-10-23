"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles, ChevronDown, Instagram } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface HeroProps {
  onOpenBetaModal?: (tier?: "beta" | "creator" | "founding") => void;
}

export default function Hero({ onOpenBetaModal }: HeroProps) {
  const handleOpenBeta = (tier: "beta" | "creator" | "founding" = "beta") => {
    if (onOpenBetaModal) {
      onOpenBetaModal(tier);
    } else {
      window.open(siteConfig.links.betaApp, "_blank");
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#191621] select-none">
      {/* =========================================================================
          BACKGROUND VIDEO & SCENERY LAYER
          Prompt: A surreal wide shot of a solitary wooden desk and vintage chair atop
          a lush, flower-covered grassy hill under a vast sky with purple/violet clouds.
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* HTML5 Looping Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/gemini_generated_video_5dbfdf1f.mp4" type="video/mp4" />
        </video>

        {/* High-Resolution Priority Poster Fallback Image with Smooth Motion */}
        <Image
          src="/hero-bg.jpg"
          alt="A solitary wooden desk and vintage chair atop a lush flower-covered hill under dreamy purple clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%] animate-ken-burns scale-105 -z-10"
        />

        {/* Cinematic Vignette & Atmospheric Overlays */}
        {/* Top Header Dark Vignette */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent z-[1]" />

        {/* Central Contrast Layer to make white & purple text pop with 8K clarity */}
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-[0.88] z-[1]" />

        {/* Soft Dreamy Purple Ambient Color Wash */}
        <div className="absolute inset-0 bg-[#4520A8]/15 mix-blend-color z-[1]" />

        {/* Bottom Seamless Fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FFFCFF] via-[#FFFCFF]/75 to-transparent z-[2]" />

        {/* Gentle Breeze Floating Pollen / Flower Particles */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute top-[28%] left-[18%] w-2 h-2 rounded-full bg-[#EDE5FF]/60 blur-[1px] animate-float-gentle" />
          <div className="absolute top-[42%] left-[32%] w-1.5 h-1.5 rounded-full bg-[#EDE5FF]/50 blur-[0.5px] animate-float-gentle [animation-delay:1.5s]" />
          <div className="absolute top-[35%] right-[22%] w-2.5 h-2.5 rounded-full bg-white/50 blur-[1px] animate-float-gentle [animation-delay:2.5s]" />
          <div className="absolute top-[55%] right-[30%] w-1.5 h-1.5 rounded-full bg-[#EDE5FF]/70 blur-[0.5px] animate-float-gentle [animation-delay:3.5s]" />
          <div className="absolute top-[68%] left-[25%] w-2 h-2 rounded-full bg-[#EDE5FF]/40 blur-[1px] animate-float-gentle [animation-delay:0.8s]" />
          <div className="absolute top-[20%] right-[40%] w-1 h-1 rounded-full bg-white/70 animate-float-gentle [animation-delay:4s]" />
        </div>
      </div>

      {/* =========================================================================
          HERO CONTENT LAYER: Left-Aligned Title & CTAs, Right-Aligned Compact Card Near Top
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
          
          {/* LEFT COLUMN: Title & CTAs (Left-aligned) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Highly Highlighted Live Badge: ONLY 'Beta is Live Now' */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#6C3BFF]/35 hover:bg-[#6C3BFF]/50 border border-[#8D5EFF] text-white text-xs sm:text-sm font-secondary font-bold mb-5 shadow-[0_0_25px_rgba(108,59,255,0.7)] backdrop-blur-xl transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EDE5FF] opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_8px_#ffffff]"></span>
              </span>
              <span className="tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Beta is Live Now
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#EDE5FF] fill-[#EDE5FF]" />
            </motion.div>

            {/* Main Headline (Left-aligned) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 sm:mb-8 text-left"
            >
              <h1 className="tracking-tight leading-[1.08] text-left">
                <span className="block font-secondary font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                  Where thoughts
                </span>
                <span className="block font-primary font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#EDE5FF] mt-1 sm:mt-2 drop-shadow-[0_8px_35px_rgba(108,59,255,0.7)]">
                  find their voice.
                </span>
              </h1>
            </motion.div>

            {/* Left-Aligned CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleOpenBeta("beta")}
                id="hero-access-beta-btn"
                className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#6C3BFF] hover:bg-[#5827E6] text-white font-secondary font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-[0_12px_40px_rgba(108,59,255,0.5)] hover:shadow-[0_16px_50px_rgba(108,59,255,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Access Beta</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#what-is-writogram"
                id="hero-discover-btn"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/15 hover:border-[#EDE5FF] border border-white/30 text-white font-secondary font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20"
              >
                <Compass className="w-5 h-5 text-[#EDE5FF]" />
                <span>Discover Writogram</span>
              </a>
            </motion.div>

            {/* Left-aligned Community Proof with High Visibility & Contrast */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-secondary text-left"
            >
              <button
                onClick={() => handleOpenBeta("founding")}
                className="inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer group bg-black/85 hover:bg-black/95 backdrop-blur-xl px-3.5 sm:px-4 py-2.5 rounded-full border border-white/35 shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all"
              >
                <span className="flex -space-x-1.5 shrink-0">
                  <span className="w-5 h-5 rounded-full bg-[#EDE5FF] text-[#4520A8] flex items-center justify-center font-extrabold text-[9px] ring-2 ring-white/60">W</span>
                  <span className="w-5 h-5 rounded-full bg-[#6C3BFF] text-white flex items-center justify-center font-extrabold text-[9px] ring-2 ring-white/60">P</span>
                  <span className="w-5 h-5 rounded-full bg-white text-[#191621] flex items-center justify-center font-extrabold text-[9px] ring-2 ring-white/60">J</span>
                </span>
                <span className="text-white font-bold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] group-hover:text-[#EDE5FF] transition-colors">
                  Join the First 200 Founding Members
                </span>
              </button>

              <span className="text-white/60 font-bold hidden sm:inline">&bull;</span>

              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black/85 hover:bg-[#6C3BFF] backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/35 text-white font-bold tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all hover:border-[#EDE5FF]"
              >
                <Instagram className="w-3.5 h-3.5 text-[#EDE5FF]" />
                <span>Follow <strong>@writogram</strong></span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Compact Glassmorphic Card Near Top with Tagline */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start lg:items-end w-full mt-4 lg:mt-2">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-full sm:max-w-[380px] bg-black/60 backdrop-blur-2xl border border-white/25 p-5 sm:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left relative overflow-hidden"
            >
              {/* Subtle glass reflection highlight */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#6C3BFF]/25 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-secondary text-[11px] uppercase tracking-wider text-[#EDE5FF] font-bold bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
                    The Mission
                  </span>
                  <span className="text-lg text-[#EDE5FF] font-primary">Writogram</span>
                </div>

                {/* The Tagline */}
                <p className="font-secondary text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-sm font-light">
                  Share thoughts, stories, poems, journals and meaningful conversations with people who genuinely enjoy reading.
                </p>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80 font-secondary font-medium">
                  <span>A calm sanctuary for writers</span>
                  <span className="text-[#EDE5FF] font-semibold">Zero video noise</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Down Chevron indicator for smooth flow into Section 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none hidden sm:flex"
      >
        <span className="text-[11px] font-secondary tracking-widest uppercase text-[#706A7C] font-semibold mb-1">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#6C3BFF] animate-bounce" />
      </motion.div>
    </section>
  );
}
