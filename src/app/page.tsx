import Hero from "@/components/ui/Hero";
import { Header } from "@/components/layout/Header";
import { ProblemSection } from "@/components/ui/ProblemSection";
import { PhilosophySection } from "@/components/ui/PhilosophySection";
import { ServiceSection } from "@/components/ui/ServiceSection";
import SelectedWork from "@/components/ui/SelectedWork";
import { ProcessSection } from "@/components/ui/ProcessSection";
import { WhoThisIsForSection } from "@/components/ui/WhoThisIsForSection";
import { FAQSection } from "@/components/ui/FAQSection";
import InsightsSection from "@/components/ui/InsightsSection";
import { FounderNoteSection } from "@/components/ui/FounderNoteSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between">
      <Header />
      <Hero />
      <ProblemSection />
      <PhilosophySection />
      <SelectedWork />
      <ProcessSection />
      <WhoThisIsForSection />
      <ServiceSection />
      <FAQSection />
      <InsightsSection />
      <FounderNoteSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
