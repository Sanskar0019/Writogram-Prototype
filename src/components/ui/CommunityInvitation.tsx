"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Feather, Compass } from "lucide-react";
import Image from "next/image";

interface CommunityInvitationProps {
  onOpenBetaModal?: (tier?: "beta" | "creator" | "founding") => void;
}

export function CommunityInvitation({ onOpenBetaModal }: CommunityInvitationProps) {
  return (
    <section id="first-200" className="py-24 md:py-36 bg-[#FFFCFF] relative overflow-hidden selection:bg-[#EDE5FF] selection:text-[#4520A8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Dominant Purple Hero Container with Community Background Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-white rounded-3xl md:rounded-[2.5rem] p-6 sm:p-12 lg:p-20 shadow-2xl purple-glow-strong border border-[#6C3BFF]/40 overflow-hidden"
        >
          {/* =========================================================================
              BACKGROUND COMMUNITY ILLUSTRATION
              Aerial view of people lounging, reading, and listening to music in purple meadow
              ========================================================================= */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src="/community-bg.jpg"
              alt="Writogram community gathering in lavender meadow"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_right] sm:object-right scale-105"
            />

            {/* Gradient Overlay: Deep ink contrast on left, natural artwork reveal on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#191621] via-[#1F113D]/95 sm:via-[#1F113D]/90 sm:via-55% to-[#191621]/30" />
            
            {/* Top and Bottom Feathered Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#191621]/90 via-transparent to-black/30" />
            
            {/* Soft Dreamy Purple Color Accent */}
            <div className="absolute inset-0 bg-[#6C3BFF]/10 mix-blend-color" />
          </div>

          {/* Watermark Number */}
          <div className="absolute right-8 bottom-6 select-none pointer-events-none opacity-5 font-primary text-[18vw] leading-none text-white z-[1]">
            200
          </div>

          <div className="max-w-2xl sm:max-w-xl lg:max-w-2xl relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#EDE5FF] text-xs font-semibold tracking-widest uppercase mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#EDE5FF]" />
              <span>FIRST 200 COMMUNITY</span>
            </div>

            {/* Headline */}
            <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.05] tracking-tight mb-7 drop-shadow-md">
              Be part of <br />
              <span className="font-primary font-normal text-[#EDE5FF] text-4xl sm:text-6xl md:text-7xl block mt-1 drop-shadow-[0_8px_30px_rgba(108,59,255,0.7)]">
                the beginning.
              </span>
            </h2>

            {/* Copy */}
            <div className="space-y-4 text-sm sm:text-lg md:text-xl text-purple-100 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-sm">
              <p>
                The first people don&apos;t just join a platform. They help shape its culture, community, and future.
              </p>
              <p className="text-purple-200/90 text-xs sm:text-base leading-relaxed">
                If Writogram resonates with you, this is your opportunity to become one of the first 200 writers and readers who help build it from the very beginning.
              </p>
            </div>

            {/* Dual Pillars: Distinct Creator Partners & Founding Members Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 max-w-xl">
              <div
                onClick={() => onOpenBetaModal && onOpenBetaModal("creator")}
                className="p-5 rounded-2xl bg-black/45 hover:bg-black/60 border border-white/20 hover:border-[#EDE5FF]/60 backdrop-blur-md flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-xl"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6C3BFF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Feather className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-secondary font-bold text-lg text-white">Creator Partners</h3>
                    <p className="text-xs text-purple-200">First 100 writers & poets</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#EDE5FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Apply as Creator Partner <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div
                onClick={() => onOpenBetaModal && onOpenBetaModal("founding")}
                className="p-5 rounded-2xl bg-black/45 hover:bg-black/60 border border-white/20 hover:border-[#EDE5FF]/60 backdrop-blur-md flex flex-col justify-between transition-all duration-300 cursor-pointer group shadow-xl"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6C3BFF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-secondary font-bold text-lg text-white">Founding Members</h3>
                    <p className="text-xs text-purple-200">First 100 reflective readers</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#EDE5FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Claim Founding Member Spot <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onOpenBetaModal && onOpenBetaModal("founding")}
                id="explore-first-200-btn"
                className="py-4 px-8 rounded-full bg-white hover:bg-[#EDE5FF] text-[#191621] hover:text-[#4520A8] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore the First 200</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-purple-200 font-medium">
                Creator Partners &bull; Founding Members
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
