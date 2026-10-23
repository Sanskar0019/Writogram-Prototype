"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Feather, Tag, Smile, Heart, Search, Sparkles, Users2, ArrowRight, Quote } from "lucide-react";

const pathways = [
  {
    id: "topics",
    name: "Topics",
    description: "Browse writing categorized by theme—from existential philosophy to everyday observations.",
    icon: Tag,
    example: "Memory • Solitude • Craft",
    sampleExcerpt: "“We preserve the memories that hurt us just enough to remind us that we were once entirely awake.”",
    sampleAuthor: "Julian Thorne • Topic: Memory & Time",
  },
  {
    id: "moods",
    name: "Moods",
    description: "Connect with prose and poetry that match what you feel right now.",
    icon: Smile,
    example: "Midnight • Quiet Contemplation • Hope",
    sampleExcerpt: "“There is a specific stillness at 2:00 AM where words stop negotiating with pride.”",
    sampleAuthor: "Sasha Lin • Mood: Midnight Contemplation",
  },
  {
    id: "interests",
    name: "Interests",
    description: "Zero in on formats and niches you cherish most as a reader.",
    icon: Heart,
    example: "Short Essays • Micro-fiction • Verse",
    sampleExcerpt: "“He left the café leaving behind a paperback whose margins held ten years of unspoken devotion.”",
    sampleAuthor: "Claire D. • Interest: Micro-fiction",
  },
  {
    id: "search",
    name: "Search",
    description: "Discover pieces by evocative lines, phrases, or specific literary motifs.",
    icon: Search,
    example: "Find lines about autumn rain & train stations",
    sampleExcerpt: "“The train windows fogged with the quiet breathing of travelers who had nowhere left to run.”",
    sampleAuthor: "Discovered matching search query: 'rain & departures'",
  },
  {
    id: "recommendations",
    name: "Recommendations",
    description: "Serendipitous encounters with writing chosen for depth rather than algorithmic hype.",
    icon: Sparkles,
    example: "Curated literary resonance",
    sampleExcerpt: "“A poem doesn't need to explain the world; it only needs to let the world exist without defense.”",
    sampleAuthor: "Featured Discovery • Reader Affinity Match",
  },
  {
    id: "communities",
    name: "Communities",
    description: "Engage with focused circles of writers and readers who share your sensibility.",
    icon: Users2,
    example: "Poet Collective • Memoir Guild",
    sampleExcerpt: "“In our weekly memoir workshop, we learned that honesty is less about courage and more about precision.”",
    sampleAuthor: "The Essayists Salon • 84 active contributors",
  },
];

export function DiscoveryPathways() {
  const [selectedPathway, setSelectedPathway] = useState(0);

  const active = pathways[selectedPathway];

  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-[#F7F3FF]/50 relative border-t border-b border-[#EDE5FF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4">
            Organic Discovery
          </span>
          <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl text-[#191621] leading-[1.08] font-bold mb-6">
            Great writing deserves <br />
            <span className="font-primary font-normal text-[#6C3BFF] text-3xl sm:text-5xl md:text-6xl block mt-1">to be read.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#706A7C] font-normal leading-relaxed">
            Your audience isn&apos;t limited to who follows you. Writogram helps meaningful writing reach people who genuinely connect with it.
          </p>
        </div>

        {/* Visual Discovery Journey Diagram */}
        <div className="relative">
          {/* Starting Point Hub: YOUR WORDS */}
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#6C3BFF] to-[#4520A8] text-white px-7 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-xl purple-glow-soft flex items-center gap-3.5 border border-white/20 relative z-20"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-[#EDE5FF]">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-secondary font-bold tracking-widest uppercase text-purple-200 block">
                  Starting Point
                </span>
                <span className="font-secondary text-xl sm:text-2xl font-bold tracking-tight">
                  YOUR WORDS
                </span>
              </div>
            </motion.div>

            {/* Connecting visual beam */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#6C3BFF] to-[#EDE5FF]" />
            <div className="text-[10px] sm:text-[11px] font-secondary font-semibold uppercase tracking-wider text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full text-center">
              Branches into 6 Discovery Pathways
            </div>
          </div>

          {/* 6 Pathways Cards Grid with Active Selector */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {pathways.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedPathway === idx;

              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedPathway(idx)}
                  className={`border rounded-3xl p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#6C3BFF] shadow-lg shadow-[#6C3BFF]/15 scale-[1.02]"
                      : "bg-white/80 border-[#E4D9FC] hover:border-[#6C3BFF]/40 hover:bg-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#6C3BFF] text-white"
                            : "bg-[#EDE5FF] text-[#6C3BFF] group-hover:scale-105"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-secondary font-medium text-[#706A7C]">
                        Pathway 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-secondary text-xl sm:text-2xl text-[#191621] font-bold mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#706A7C] leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F7F3FF] flex items-center justify-between text-xs">
                    <span className="text-[#6C3BFF] font-medium font-secondary bg-[#F7F3FF] px-2.5 py-1 rounded-lg">
                      {item.example}
                    </span>
                    <span className="text-[11px] font-semibold text-[#706A7C] group-hover:text-[#6C3BFF] flex items-center gap-0.5">
                      Preview <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Discovery Output Preview */}
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-[#EDE5FF]/70 via-white to-[#F7F3FF] border border-[#6C3BFF]/30 shadow-md max-w-4xl mx-auto mb-14"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4520A8] font-semibold uppercase tracking-wider mb-3">
              <span className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#6C3BFF]" />
                How Readers Discover Via {active.name}
              </span>
              <span className="bg-white px-2.5 py-0.5 rounded-full border border-[#E4D9FC] text-[10px]">
                Active Preview
              </span>
            </div>

            <blockquote className="font-primary text-xl sm:text-2xl text-[#191621] leading-relaxed mb-4">
              {active.sampleExcerpt}
            </blockquote>

            <div className="text-xs text-[#706A7C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6C3BFF]" />
              <span>{active.sampleAuthor}</span>
            </div>
          </motion.div>

          {/* Closing Discovery Message Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E4D9FC] text-center max-w-3xl mx-auto shadow-md"
          >
            <p className="font-secondary text-lg sm:text-2xl text-[#191621] font-bold mb-2 leading-relaxed">
              &ldquo;Your audience shouldn&apos;t be limited to who already follows you.&rdquo;
            </p>
            <p className="text-xs sm:text-base text-[#706A7C] font-normal leading-relaxed">
              Instead of relying only on followers, Writogram helps meaningful writing remain discoverable through multiple pathways.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
