"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Feather, Compass, ArrowRight, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

export type ModalTier = "beta" | "creator" | "founding";

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: ModalTier;
}

export function BetaAccessModal({ isOpen, onClose, initialTier = "beta" }: BetaAccessModalProps) {
  const [tier, setTier] = useState<ModalTier>(initialTier);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate immediate confirmation and persistent early reservation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success(
        tier === "creator"
          ? "Creator Partner application received! Welcome to the First 100."
          : tier === "founding"
          ? "Founding Member reservation confirmed! Welcome to Writogram."
          : "Beta access granted! Welcome to Writogram."
      );
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setHandle("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#191621]/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#FFFCFF] border border-[#E4D9FC] rounded-3xl shadow-2xl p-6 sm:p-8 z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6C3BFF] via-[#8D5EFF] to-[#4520A8]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-beta-modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F3FF] hover:bg-[#EDE5FF] text-[#191621] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDE5FF] text-[#4520A8] mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#6C3BFF]" />
                    Beta Is Live • First 200 Invitation
                  </span>
                  <h3
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-secondary font-bold text-[#191621] leading-tight"
                  >
                    Enter Writogram
                  </h3>
                  <p className="text-sm text-[#706A7C] mt-1.5 font-secondary">
                    A social space where words matter. Reserve your early place and shape the community.
                  </p>
                </div>

                {/* Tier Switcher */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F7F3FF] rounded-2xl mb-6 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setTier("beta")}
                    className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer ${
                      tier === "beta"
                        ? "bg-[#6C3BFF] text-white shadow-sm font-semibold"
                        : "text-[#706A7C] hover:text-[#191621]"
                    }`}
                  >
                    Beta Access
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("creator")}
                    className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer ${
                      tier === "creator"
                        ? "bg-[#6C3BFF] text-white shadow-sm font-semibold"
                        : "text-[#706A7C] hover:text-[#191621]"
                    }`}
                  >
                    Creator Partner
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("founding")}
                    className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer ${
                      tier === "founding"
                        ? "bg-[#6C3BFF] text-white shadow-sm font-semibold"
                        : "text-[#706A7C] hover:text-[#191621]"
                    }`}
                  >
                    Founding Member
                  </button>
                </div>

                {/* Tier Description */}
                <div className="p-3.5 bg-[#F7F3FF] border border-[#EDE5FF] rounded-2xl mb-6 text-xs text-[#706A7C] flex items-start gap-2.5">
                  {tier === "creator" ? (
                    <>
                      <Feather className="w-4 h-4 text-[#6C3BFF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#191621] block">First 100 Creator Partners</strong>
                        Build your literary identity, reach readers beyond followers, and help pioneer new formats.
                      </div>
                    </>
                  ) : tier === "founding" ? (
                    <>
                      <Compass className="w-4 h-4 text-[#6C3BFF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#191621] block">First 100 Founding Members</strong>
                        Read, reflect, and share without pressure. Connect through ideas rather than endless video feeds.
                      </div>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#6C3BFF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#191621] block">Instant Beta Access</strong>
                        Access the early app, explore writing discovery, and begin posting your voice.
                      </div>
                    </>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#191621] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maya Rivers"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E4D9FC] bg-white text-base sm:text-sm text-[#191621] placeholder-[#706A7C]/60 focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#EDE5FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191621] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="writer@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E4D9FC] bg-white text-base sm:text-sm text-[#191621] placeholder-[#706A7C]/60 focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#EDE5FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#191621] uppercase tracking-wider mb-1.5">
                      {tier === "creator"
                        ? "Writing Profile / Social Handle (optional)"
                        : "What do you write or enjoy reading? (optional)"}
                    </label>
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder={tier === "creator" ? "@pen_name or website" : "Poetry, personal essays, reflections"}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E4D9FC] bg-white text-base sm:text-sm text-[#191621] placeholder-[#706A7C]/60 focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#EDE5FF] transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full bg-[#6C3BFF] hover:bg-[#4520A8] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all purple-glow-soft hover:shadow-lg disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Reserving your spot...</span>
                      ) : (
                        <>
                          <span>
                            {tier === "creator"
                              ? "Apply as Creator Partner"
                              : tier === "founding"
                              ? "Claim Founding Member Spot"
                              : "Get Early Access"}
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <a
                    href={siteConfig.links.betaApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#6C3BFF] hover:text-[#4520A8] font-semibold transition-colors"
                  >
                    <span>Already have an invite? Launch the Beta App directly</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              /* Success View */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#EDE5FF] text-[#6C3BFF] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-secondary font-bold text-[#191621] mb-2">
                  Welcome to the First 200
                </h4>
                <p className="text-sm text-[#706A7C] max-w-sm mx-auto mb-6">
                  Thank you, <strong className="text-[#191621]">{name || "fellow writer"}</strong>! Your place has been recorded. You can now jump directly into the Writogram Beta workspace.
                </p>

                <div className="space-y-3">
                  <a
                    href={siteConfig.links.betaApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-[#6C3BFF] hover:bg-[#4520A8] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all purple-glow-soft cursor-pointer"
                  >
                    <span>Launch Writogram App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full py-2.5 px-6 rounded-full bg-[#F7F3FF] hover:bg-[#EDE5FF] text-[#191621] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
