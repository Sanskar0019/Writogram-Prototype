"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    title: "FOUNDATION",
    subtitle: "Amazon A+ Content",
    price: "18,000",
    description: "Structured A+ modules with clear visual hierarchy and copy that guides attention, builds trust, and feels intentional—not templated.",
    includes: ["Module structure", "Visual flow", "Benefit-led copy", "Mobile-first layouts"],
    bestFor: "Brands refining how individual products are presented.",
    bgClass: "bg-white text-gray-900 border-gray-200",
    accentClass: "bg-gray-100",
    buttonClass: "bg-gray-900 text-white hover:bg-black",
    image: "/service-foundation.png"
  },
  {
    title: "FRAMEWORK",
    subtitle: "Brand Stores",
    price: "30,000",
    description: "Brand-led Amazon Stores designed with navigation, rhythm, and storytelling—so the store feels like a home, not a catalogue.",
    includes: ["Page structure", "Category flow", "Banner systems", "Brand consistency"],
    bestFor: "Brands with multiple products or growing catalogues.",
    bgClass: "bg-gray-900 text-white border-gray-700",
    accentClass: "bg-gray-800",
    buttonClass: "bg-[#dcff0d] text-gray-900 hover:bg-[#c4e600]",
    image: "/service-framework.png"
  },
  {
    title: "SYSTEM",
    subtitle: "Brand Story Systems",
    price: "40,000",
    description: "A visual and verbal system—typography, icons, tone, and layout rules—that keeps every piece of content consistent across Amazon.",
    includes: ["Type styles", "Icon language", "Copy tone", "Visual guidelines"],
    bestFor: "Brands thinking beyond one listing or one launch.",
    bgClass: "bg-gray-100 text-gray-900 border-gray-300",
    accentClass: "bg-white",
    buttonClass: "bg-gray-900 text-white hover:bg-black",
    image: "/service-system.png"
  },
  {
    title: "CUSTOM",
    subtitle: "Custom Engagements",
    price: "Scoped individually",
    isCustomPrice: true,
    description: "Tailored creative support for launches, redesigns, or integrated Amazon and website narratives—shaped around specific brand needs.",
    includes: ["Discovery-led scope", "Flexible deliverables", "Collaborative process"],
    bestFor: "Founders who want alignment before execution.",
    bgClass: "bg-gradient-to-br from-[#fbffcc] to-white text-gray-900 border-[#dcff0d]/30",
    accentClass: "bg-white/50",
    buttonClass: "bg-gray-900 text-white hover:bg-black",
    image: "/service-custom.png"
  }
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  // Stacking offset to allow previous cards to peek slightly or just overlap cleanly
  const topOffset = 100 + index * 10;

  return (
    <div
      className="sticky w-full flex justify-center perspective-1000"
      style={{ top: `${topOffset}px`, marginBottom: `${index === services.length - 1 ? 0 : '20px'}` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className={`relative w-[95vw] md:w-[1000px] h-auto md:h-[600px] rounded-3xl overflow-hidden border shadow-2xl ${service.bgClass}`}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Column: Content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-between h-full relative z-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-sans text-xs tracking-widest font-medium opacity-60">{service.title}</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{service.subtitle}</h3>
                <div className="text-sm opacity-70">
                  {!service.isCustomPrice && <span>Starting at </span>}
                  <span className="text-2xl font-bold">
                    {!service.isCustomPrice && '₹'}
                    {service.price}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-md">{service.description}</p>
            </div>

            <div className="space-y-6 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-wide opacity-60 mb-2">Best For</div>
                  <div className="text-sm leading-snug">{service.bestFor}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wide opacity-60 mb-2">Includes</div>
                  <ul className="space-y-1">
                    {service.includes.slice(0, 3).map((item: string, idx: number) => (
                      <li key={idx} className="text-xs flex items-center gap-1.5 opacity-80">
                        <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {service.includes.length > 3 && (
                      <li className="text-xs opacity-50 italic">+ more</li>
                    )}
                  </ul>
                </div>
              </div>

              <button className={`w-full md:w-auto py-3 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all group ${service.buttonClass}`}>
                Book this plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-2/5 h-64 md:h-full relative overflow-hidden hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 z-10" />
            <Image
              src={service.image}
              alt={service.subtitle}
              fill
              className="object-cover object-center"
            />
          </div>
          {/* Mobile Image (Optional - usually better to keep layout clean on mobile, but can add if requested) */}
        </div>
      </motion.div>
    </div>
  );
}

export function ServiceSection() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative bg-white min-h-screen py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Title Header */}
        <div className="mb-24 px-4 md:px-8 max-w-4xl mx-auto text-center md:text-left md:ml-20">
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
            What we shape.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Thoughtfully scoped plans. Transparent starting points.
            designed to adapt to your narrative.
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col items-center gap-12 pb-32">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
            />
          ))}

          {/* End CTA Card */}
          <div
            className="sticky top-[140px] w-full flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-20%" }}
              className="w-[95vw] md:w-[1000px] h-[50vh] md:h-[400px] rounded-3xl bg-gray-900 text-white p-12 flex flex-col items-center justify-center text-center space-y-8 shadow-2xl"
            >
              <h3 className="text-3xl md:text-5xl font-bold max-w-xl">
                See how these come together
              </h3>
              <button className="bg-[#dcff0d] text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-[#c4e600] transition-all flex items-center gap-3">
                View case studies
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}