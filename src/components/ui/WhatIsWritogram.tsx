"use client";

import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Feather, BookMarked, Compass, MessageSquareQuote } from "lucide-react";

const formats = [
  {
    id: "thoughts",
    name: "Thoughts",
    tagline: "Capture what's on your mind.",
    description: "Raw observations, epiphanies, and fragments of realization before they slip away.",
    icon: Lightbulb,
    preview: "“We spend our youth acquiring words, and the rest of our life trying to unlearn the noise.”",
    colSpan: "lg:col-span-7",
    bgClass: "bg-[#F7F3FF] border-[#E4D9FC]",
    accentBadge: "bg-[#EDE5FF] text-[#4520A8]",
  },
  {
    id: "stories",
    name: "Stories",
    tagline: "Tell experiences worth remembering.",
    description: "Narratives with rhythm, tension, and heart. Built for chapters, not reels.",
    icon: BookOpen,
    preview: "The train had already pulled out of St. Pancras when I realized I still carried her key in my coat pocket...",
    colSpan: "lg:col-span-5",
    bgClass: "bg-white border-[#E4D9FC]",
    accentBadge: "bg-[#6C3BFF] text-white",
  },
  {
    id: "poetry",
    name: "Poetry",
    tagline: "Express emotions through verse.",
    description: "Stanzas and free verse where every line break holds breath and resonance.",
    icon: Feather,
    preview: "Salt on the sill / the wind unlearning your name / autumn arrives.",
    colSpan: "lg:col-span-4",
    bgClass: "bg-gradient-to-b from-[#EDE5FF]/80 to-white border-[#E4D9FC]",
    accentBadge: "bg-[#EDE5FF] text-[#6C3BFF]",
    italic: true,
  },
  {
    id: "journals",
    name: "Journals",
    tagline: "Keep personal moments close.",
    description: "An intimate sanctuary for inner monologue, quiet gratitude, and unfiltered truth.",
    icon: BookMarked,
    preview: "October 24. Today the rain smelled like old books and fresh decisions.",
    colSpan: "lg:col-span-4",
    bgClass: "bg-[#FFFCFF] border-[#E4D9FC]",
    accentBadge: "bg-[#EDE5FF] text-[#4520A8]",
  },
  {
    id: "reflections",
    name: "Reflections",
    tagline: "Capture lessons, memory and growth.",
    description: "Looking backward with kindness, forward with intention. Distilled wisdom across seasons.",
    icon: Compass,
    preview: "What I thought was a dead end three years ago was just the beginning of a different sentence.",
    colSpan: "lg:col-span-4",
    bgClass: "bg-[#F7F3FF] border-[#E4D9FC]",
    accentBadge: "bg-[#EDE5FF] text-[#6C3BFF]",
  },
  {
    id: "conversations",
    name: "Conversations",
    tagline: "Discussions beyond shallow comments.",
    description: "Thoughtful dialogue that extends an author's ideas instead of fleeting reaction emojis.",
    icon: MessageSquareQuote,
    preview: "“Your third stanza made me rethink my own departure last summer. How did you know when to let go?”",
    colSpan: "lg:col-span-12",
    bgClass: "bg-gradient-to-r from-[#4520A8] to-[#191621] text-white border-[#6C3BFF]/30",
    accentBadge: "bg-[#6C3BFF] text-white",
    isWideDark: true,
  },
];

export function WhatIsWritogram() {
  return (
    <section id="what-is-writogram" className="py-20 md:py-32 bg-[#FFFCFF] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header - Streamlined & Concise */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4 font-secondary">
            The Purpose
          </span>
          <h2 className="font-secondary text-4xl sm:text-5xl md:text-6xl text-[#191621] leading-[1.08] font-bold mb-4">
            Where writing <span className="font-primary font-normal text-[#6C3BFF] text-4xl sm:text-5xl md:text-6xl ml-1">comes first.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#706A7C] font-secondary font-normal leading-relaxed">
            A social platform for people who believe words deserve more than competing against video feeds and photo captions.
          </p>
        </div>

        {/* 6 Formats in a Distinctive Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {formats.map((item, idx) => {
            const Icon = item.icon;
            const isDark = item.isWideDark;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`${item.colSpan} ${item.bgClass} border rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#6C3BFF]/10 transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-secondary font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.accentBadge}`}>
                      {item.name}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/10 text-[#EDE5FF]' : 'bg-[#EDE5FF] text-[#6C3BFF]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`font-secondary text-xl sm:text-2xl ${isDark ? 'text-white' : 'text-[#191621]'} font-bold mb-2`}>
                    {item.tagline}
                  </h3>

                  <p className={`text-xs sm:text-sm ${isDark ? 'text-purple-100/80' : 'text-[#706A7C]'} leading-relaxed mb-5 font-normal`}>
                    {item.description}
                  </p>
                </div>

                {/* Literary Excerpt Preview Box */}
                <div
                  className={`p-3.5 rounded-2xl text-xs ${
                    isDark
                      ? 'bg-white/5 border border-white/10 text-purple-200'
                      : 'bg-white/70 border border-[#EDE5FF] text-[#191621]'
                  } ${item.italic ? 'italic font-primary text-sm' : 'font-secondary'}`}
                >
                  <span className="text-[10px] uppercase font-secondary font-semibold tracking-wider text-[#6C3BFF] block mb-1">
                    Sample {item.name}
                  </span>
                  {item.preview}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
