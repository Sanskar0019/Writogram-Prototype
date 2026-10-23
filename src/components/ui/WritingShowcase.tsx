"use client";

import { motion } from "framer-motion";
import { Sparkles, Moon, HeartHandshake, Quote } from "lucide-react";

export function WritingShowcase() {
  return (
    <section className="py-24 md:py-36 bg-[#FFFCFF] relative overflow-hidden border-t border-b border-[#EDE5FF]">
      {/* Subtle literary background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 select-none pointer-events-none opacity-[0.03] font-primary text-[28vw] text-[#4520A8] leading-none">
        words
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4 font-secondary">
            <Quote className="w-3.5 h-3.5" />
            The Weight of Words
          </span>
          <h2 className="font-secondary text-3xl sm:text-4xl md:text-5xl text-[#191621] leading-tight font-bold">
            Before we talk features, <br />
            <span className="font-primary font-normal text-[#4520A8] text-4xl sm:text-5xl md:text-6xl inline-block mt-2">
              listen to how words feel here.
            </span>
          </h2>
          <p className="font-secondary text-sm sm:text-base text-[#706A7C] mt-3">
            Writogram was conceived for the sentiments conventional social media rushes past.
          </p>
        </div>

        {/* 3 Distinct Editorial Moments - Asymmetrical & Expressive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fragment 1: EMOTIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-gradient-to-b from-[#F7F3FF] to-[#EDE5FF]/60 border border-[#E4D9FC] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-[#6C3BFF]/5 transition-all duration-500 overflow-hidden"
          >
            {/* Oversized background quotation mark */}
            <span className="absolute -top-4 right-2 font-primary text-8xl text-[#6C3BFF]/10 select-none pointer-events-none">
              “
            </span>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-secondary font-bold uppercase tracking-widest text-[#4520A8] bg-white/80 border border-[#E4D9FC] px-3 py-1 rounded-full">
                  Emotional
                </span>
                <Sparkles className="w-4 h-4 text-[#6C3BFF]" />
              </div>

              <blockquote className="font-primary text-2xl sm:text-3xl text-[#191621] leading-relaxed font-normal">
                &ldquo;Some thoughts are too heavy to stay silent.&rdquo;
              </blockquote>
            </div>

            <div className="mt-12 pt-6 border-t border-[#E4D9FC]/70 text-xs text-[#706A7C] font-secondary flex items-center justify-between relative z-10">
              <span className="font-bold text-sm text-[#4520A8]">Chapter I</span>
              <span>For unspoken burdens</span>
            </div>
          </motion.div>

          {/* Fragment 2: MIDNIGHT THOUGHTS (Centerpiece Dramatic Moment) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 bg-gradient-to-br from-[#191621] via-[#2A1759] to-[#4520A8] text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl purple-glow-strong border border-[#6C3BFF]/40 relative overflow-hidden group"
          >
            {/* Subtle glow orb */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#6C3BFF]/30 rounded-full blur-2xl pointer-events-none" />
            <span className="absolute -top-4 right-2 font-primary text-8xl text-white/10 select-none pointer-events-none">
              “
            </span>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-secondary font-bold uppercase tracking-widest text-[#EDE5FF] bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-full">
                  Midnight Thoughts
                </span>
                <Moon className="w-4 h-4 text-[#EDE5FF]" />
              </div>

              <blockquote className="font-primary text-2xl sm:text-3xl text-white leading-relaxed font-normal">
                &ldquo;The words we never say deserve a place too.&rdquo;
              </blockquote>
            </div>

            <div className="mt-12 pt-6 border-t border-white/15 text-xs text-purple-200/90 font-secondary flex items-center justify-between relative z-10">
              <span className="font-bold text-sm text-[#EDE5FF]">Chapter II</span>
              <span>For late-night clarity</span>
            </div>
          </motion.div>

          {/* Fragment 3: HEALING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 bg-[#FFFCFF] border border-[#E4D9FC] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-[#6C3BFF]/5 hover:border-[#6C3BFF]/40 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute -top-4 right-2 font-primary text-8xl text-[#6C3BFF]/10 select-none pointer-events-none">
              “
            </span>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-secondary font-bold uppercase tracking-widest text-[#6C3BFF] bg-[#EDE5FF] px-3 py-1 rounded-full">
                  Healing
                </span>
                <HeartHandshake className="w-4 h-4 text-[#6C3BFF]" />
              </div>

              <blockquote className="font-primary text-2xl sm:text-3xl text-[#191621] leading-relaxed font-normal">
                &ldquo;Not every emotion needs fixing. Some just need expression.&rdquo;
              </blockquote>
            </div>

            <div className="mt-12 pt-6 border-t border-[#EDE5FF] text-xs text-[#706A7C] font-secondary flex items-center justify-between relative z-10">
              <span className="font-bold text-sm text-[#6C3BFF]">Chapter III</span>
              <span>For emotional peace</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
