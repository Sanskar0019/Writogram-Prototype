"use client";

import { motion } from "framer-motion";
import { ArrowRight, Feather, Compass, CheckCircle2 } from "lucide-react";

interface WhyJoinProps {
  onOpenBetaModal?: (tier: "creator" | "founding") => void;
}

export function WhyJoinWritogram({ onOpenBetaModal }: WhyJoinProps) {
  return (
    <section id="why-writogram" className="py-24 md:py-36 bg-[#F7F3FF]/70 relative border-t border-b border-[#EDE5FF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4">
            Audience Pathways
          </span>
          <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl text-[#191621] leading-[1.08] font-bold mb-6">
            Built for people who believe <br />
            <span className="font-primary font-normal text-[#4520A8] text-3xl sm:text-5xl md:text-6xl block mt-1">words matter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#706A7C] font-normal leading-relaxed">
            Whether you create meaningful content or simply enjoy reading and writing, Writogram gives words the attention they deserve.
          </p>
        </div>

        {/* Two Complementary Pathways: Side-by-side balanced cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* PATH A: FOR CREATORS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="bg-white border-2 border-[#E4D9FC] hover:border-[#6C3BFF] rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col justify-between shadow-xl shadow-[#6C3BFF]/5 hover:shadow-2xl hover:shadow-[#6C3BFF]/15 transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full">
                  <Feather className="w-3.5 h-3.5" />
                  Path A: For Creators
                </span>
                <span className="text-xs font-semibold text-[#4520A8] bg-[#F7F3FF] border border-[#E4D9FC] px-3 py-1 rounded-full">
                  First 100 Allocation
                </span>
              </div>

              <h3 className="font-secondary text-3xl sm:text-4xl text-[#191621] font-bold mb-3">
                If You Create
              </h3>

              <p className="font-primary text-xl sm:text-2xl text-[#6C3BFF] mb-8 pb-4 border-b border-[#EDE5FF] leading-relaxed">
                &ldquo;Your words deserve more than being captions beneath photos and videos.&rdquo;
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#706A7C]">
                  Creator Benefits
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Reach readers beyond your followers.",
                    "Build your identity around your writing.",
                    "Become one of the First 100 Creator Partners.",
                    "Grow alongside a new platform from the very beginning.",
                    "Create writing that inspires, comforts and influences people.",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#191621]">
                      <CheckCircle2 className="w-5 h-5 text-[#6C3BFF] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EDE5FF]">
              <button
                onClick={() => onOpenBetaModal && onOpenBetaModal("creator")}
                id="creator-partner-cta"
                className="w-full py-4 px-6 rounded-full bg-[#6C3BFF] hover:bg-[#4520A8] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#6C3BFF]/20 group-hover:shadow-lg group-hover:shadow-[#6C3BFF]/30 active:scale-98 transition-all cursor-pointer"
              >
                <span>Become a Creator Partner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* PATH B: FOR READERS AND WRITERS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-gradient-to-br from-[#191621] to-[#2B1560] text-white rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col justify-between shadow-2xl purple-glow-strong border border-[#6C3BFF]/40 relative group overflow-hidden"
          >
            {/* Background gentle light accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C3BFF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EDE5FF] bg-white/10 border border-white/15 px-3.5 py-1 rounded-full">
                  <Compass className="w-3.5 h-3.5 text-[#EDE5FF]" />
                  Path B: For Readers & Writers
                </span>
                <span className="text-xs font-semibold text-[#EDE5FF] bg-white/10 px-3 py-1 rounded-full">
                  First 100 Allocation
                </span>
              </div>

              <h3 className="font-secondary text-3xl sm:text-4xl text-white font-bold mb-3">
                If You Read & Write
              </h3>

              <p className="font-primary text-xl sm:text-2xl text-[#EDE5FF] mb-8 pb-4 border-b border-white/10 leading-relaxed">
                &ldquo;Some of the most meaningful words are the ones we never post.&rdquo;
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-200">
                  Member Benefits
                </p>
                <ul className="space-y-3.5">
                  {[
                    "Express yourself without pressure.",
                    "Discover meaningful writing from around the world.",
                    "Connect through ideas instead of endless scrolling.",
                    "Become one of the First 100 Founding Members.",
                    "Help shape a community built entirely around words.",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-purple-50">
                      <CheckCircle2 className="w-5 h-5 text-[#EDE5FF] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10">
              <button
                onClick={() => onOpenBetaModal && onOpenBetaModal("founding")}
                id="founding-member-cta"
                className="w-full py-4 px-6 rounded-full bg-white hover:bg-[#EDE5FF] text-[#191621] hover:text-[#4520A8] text-sm font-semibold flex items-center justify-center gap-2 shadow-md group-hover:shadow-xl active:scale-98 transition-all cursor-pointer"
              >
                <span>Become a Founding Member</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
