"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import Hero from "@/components/ui/Hero";
import { WritingShowcase } from "@/components/ui/WritingShowcase";
import { WhatIsWritogram } from "@/components/ui/WhatIsWritogram";
import { WhyJoinWritogram } from "@/components/ui/WhyJoinWritogram";
import { PlatformComparison } from "@/components/ui/PlatformComparison";
import { DiscoveryPathways } from "@/components/ui/DiscoveryPathways";
import { CommunityInvitation } from "@/components/ui/CommunityInvitation";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalBetaCTA } from "@/components/ui/FinalBetaCTA";
import { Footer } from "@/components/layout/Footer";
import { BetaAccessModal, ModalTier } from "@/components/ui/BetaAccessModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState<ModalTier>("beta");

  const handleOpenBetaModal = (tier: ModalTier = "beta") => {
    setModalTier(tier);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[#FFFCFF] text-[#191621] selection:bg-[#EDE5FF] selection:text-[#4520A8] overflow-x-hidden w-full">
      {/* SECTION 1: Refined Responsive Navigation */}
      <Header onOpenBetaModal={handleOpenBetaModal} />

      {/* SECTION 2: Hero Section */}
      <Hero onOpenBetaModal={handleOpenBetaModal} />

      {/* SECTION 3: Emotional Writing Showcase (3 Fragments) */}
      <WritingShowcase />

      {/* SECTION 4: What is Writogram? (6 Content Formats in Editorial Grid) */}
      <WhatIsWritogram />

      {/* SECTION 5: Why Join Writogram? (Creator & Reader/Writer Pathways) */}
      <WhyJoinWritogram onOpenBetaModal={handleOpenBetaModal} />

      {/* SECTION 6: How is Writogram Different? (High-Contrast Comparison) */}
      <PlatformComparison />

      {/* SECTION 7: How Readers Discover Writing (6 Pathways Journey) */}
      <DiscoveryPathways />

      {/* SECTION 8: First 200 Community Invitation (Creator Partners & Founding Members) */}
      <CommunityInvitation onOpenBetaModal={handleOpenBetaModal} />

      {/* SECTION 9: Frequently Asked Questions (Creator & Reader Accordions + WhatsApp) */}
      <FAQSection />

      {/* SECTION 10: Final Beta CTA (Deep Purple Invitation) */}
      <FinalBetaCTA onOpenBetaModal={handleOpenBetaModal} />

      {/* SECTION 11: Editorial Footer */}
      <Footer />

      {/* Interactive Beta & Community Admission Dialog */}
      <BetaAccessModal
        key={`${isModalOpen}-${modalTier}`}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialTier={modalTier}
      />
    </main>
  );
}
