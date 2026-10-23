"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Feather, Compass, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const creatorFaqs = [
  {
    question: "Why should I post on Writogram if I'm already on Instagram?",
    answer: "Instagram helps people discover you. Writogram helps people discover your writing. The two platforms complement each other rather than compete.",
  },
  {
    question: "How will people discover my writing?",
    answer: "Writing on Writogram is discovered through our dedicated pathways: topics, moods, interests, search, recommendations and communities. We focus on matching writing with readers who genuinely care about the subject matter rather than vanity metrics.",
  },
  {
    question: "Do I need a large following?",
    answer: "No. Writogram is intended to help writing reach readers beyond an existing follower base. Your words connect based on their emotional resonance and substance, not pre-existing fame.",
  },
  {
    question: "Can I continue using Instagram and other platforms?",
    answer: "Yes. Writogram is designed to complement existing social platforms rather than require you to abandon them.",
  },
  {
    question: "Will creators be able to earn?",
    answer: "Monetisation details have not been confirmed in the current beta stage. We are prioritizing community culture, reading experience, and discovery tools before introducing any economic features, and will communicate verified plans transparently.",
  },
  {
    question: "Why should I join before launch?",
    answer: "Joining early gives you the opportunity to become one of the First 100 Creator Partners, help shape the platform's features, and cultivate a dedicated reading audience from day one.",
  },
];

const readerFaqs = [
  {
    question: "What can I write?",
    answer: "Thoughts, stories, poetry, journals, reflections and meaningful conversations.",
  },
  {
    question: "Do I need to be a writer?",
    answer: "No. Writogram is for anyone who has something to express or enjoys reading meaningful writing.",
  },
  {
    question: "Can I join just to read?",
    answer: "Absolutely. Reading, bookmarking, and discovering authentic written expression are core parts of the intended Writogram experience.",
  },
  {
    question: "Is Writogram free?",
    answer: "The Writogram Beta is currently open for early community members. Any future tier details will be announced with complete transparency.",
  },
  {
    question: "How is Writogram different from other social media?",
    answer: "Writogram puts writing first and prioritises meaningful discovery, thoughtful reading and conversations over endless photo grids and fast-paced video scrolls.",
  },
  {
    question: "Is Writogram available yet?",
    answer: "Writogram Beta is live. You can launch the application or request early access today.",
  },
];

export function FAQSection() {
  const [activeTab, setActiveTab] = useState<"creator" | "reader">("creator");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentList = activeTab === "creator" ? creatorFaqs : readerFaqs;

  return (
    <section id="faqs" className="py-24 md:py-36 bg-[#FFFCFF] relative">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#6C3BFF] bg-[#EDE5FF] px-3.5 py-1 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clarity & Transparency
          </span>
          <h2 className="font-secondary text-3xl sm:text-5xl md:text-6xl text-[#191621] leading-tight font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-base sm:text-lg text-[#706A7C] font-normal">
            We&apos;ve answered the questions we hear most often.
          </p>

          {/* Category Tabs */}
          <div className="inline-flex flex-col sm:flex-row items-center p-1 bg-[#F7F3FF] border border-[#E4D9FC] rounded-2xl mt-8 w-full sm:w-auto gap-1">
            <button
              onClick={() => {
                setActiveTab("creator");
                setOpenIndex(0);
              }}
              id="faq-tab-creators"
              aria-selected={activeTab === "creator"}
              role="tab"
              className={`w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "creator"
                  ? "bg-[#6C3BFF] text-white shadow-md shadow-[#6C3BFF]/20"
                  : "text-[#706A7C] hover:text-[#191621]"
              }`}
            >
              <Feather className="w-3.5 h-3.5" />
              <span>Creator Questions</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("reader");
                setOpenIndex(0);
              }}
              id="faq-tab-readers"
              aria-selected={activeTab === "reader"}
              role="tab"
              className={`w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "reader"
                  ? "bg-[#6C3BFF] text-white shadow-md shadow-[#6C3BFF]/20"
                  : "text-[#706A7C] hover:text-[#191621]"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Reader Questions</span>
            </button>
          </div>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4 mb-16" role="region" aria-label="FAQ Accordion">
          {currentList.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-q-${activeTab}-${index}`;
            const panelId = `faq-a-${activeTab}-${index}`;

            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F3FF] border-[#6C3BFF]/40 shadow-sm"
                    : "bg-white border-[#E4D9FC] hover:border-[#6C3BFF]/30"
                }`}
              >
                <button
                  id={faqId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#6C3BFF]"
                >
                  <span
                    className={`font-secondary text-base sm:text-lg md:text-xl font-semibold leading-snug ${
                      isOpen ? "text-[#4520A8]" : "text-[#191621]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#6C3BFF] text-white rotate-180"
                        : "bg-[#EDE5FF] text-[#6C3BFF]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={faqId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-[#706A7C] font-normal leading-relaxed border-t border-[#EDE5FF] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp & Extra Questions Callout */}
        <div className="bg-[#EDE5FF]/50 border border-[#E4D9FC] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-secondary text-xl sm:text-2xl text-[#191621] font-bold mb-1">
              Still have a question?
            </h3>
            <p className="text-xs sm:text-sm text-[#706A7C]">
              We&apos;re happy to answer anything about the platform, beta access, or creator partnerships.
            </p>
          </div>

          <a
            href={siteConfig.links.whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="w-full sm:w-auto justify-center shrink-0 px-6 py-3.5 rounded-full bg-[#191621] hover:bg-[#4520A8] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#EDE5FF]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
