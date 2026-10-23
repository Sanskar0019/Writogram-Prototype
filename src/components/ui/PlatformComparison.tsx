"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Sparkles } from "lucide-react";

const comparisons = [
  {
    conventional: "Writing often takes a back seat to visual content.",
    writogram: "Writing is the primary content.",
  },
  {
    conventional: "Reach often depends on follower count.",
    writogram: "Discovery is built around meaningful writing.",
  },
  {
    conventional: "Endless scrolling encourages quick consumption.",
    writogram: "Built for thoughtful reading and reflection.",
  },
  {
    conventional: "Great writing is easily buried over time.",
    writogram: "Quality writing remains discoverable.",
  },
  {
    conventional: "Reactions often matter more than conversations.",
    writogram: "Conversations matter more than reactions.",
  },
];

export function PlatformComparison() {
  return (
    <section className="py-24 md:py-36 bg-[#FFFCFF] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4">
            A Clear Contrast
          </span>
          <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl text-[#191621] leading-[1.08] font-bold mb-6">
            Built for writing. <br />
            <span className="font-primary font-normal text-[#6C3BFF] text-3xl sm:text-5xl md:text-6xl block mt-1">Not built around it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#706A7C] font-normal leading-relaxed">
            Most social platforms were designed around photos, videos and short-form content. Writogram was designed with writing at its core.
          </p>
        </div>

        {/* Comparison Table / Split Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-[#E4D9FC] shadow-xl">
          {/* Column 1: Most Social Platforms (Muted, grayed contrast) */}
          <div className="bg-[#FAF9FC] p-5 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#E4D9FC]">
            <div className="flex items-center gap-2 mb-6 sm:mb-8 pb-4 border-b border-[#E4D9FC]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#706A7C]" />
              <h3 className="font-secondary text-xs sm:text-sm font-bold uppercase tracking-widest text-[#706A7C]">
                Most Social Platforms
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {comparisons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#E4D9FC]/60 text-[#706A7C]"
                >
                  <XCircle className="w-5 h-5 text-[#706A7C]/60 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed font-secondary">
                    {item.conventional}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: The Writogram Experience (Purple distinction) */}
          <div className="bg-gradient-to-b from-[#EDE5FF]/40 to-[#F7F3FF] p-5 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-[#E4D9FC]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6C3BFF] animate-pulse" />
                <h3 className="font-secondary text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4520A8]">
                  The Writogram Experience
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#6C3BFF] bg-[#EDE5FF] px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Designed For Words
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {comparisons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#6C3BFF]/30 shadow-md shadow-[#6C3BFF]/5 text-[#191621]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6C3BFF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed font-secondary text-[#191621]">
                    {item.writogram}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
