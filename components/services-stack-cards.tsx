// author: Khoa Phan <https://www.pldkhoa.dev>

"use client"

import { useRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import StackingCards, { StackingCardItem } from "./fancy/blocks/stacking-card"

const cards = [
  {
    title: "Residential Interior Design",
    description:
      "Transforming houses into homes. We create personalized living spaces that reflect your unique personality, blending comfort with sophisticated aesthetics.",
    image: "/images/living-room-after.jpg",
  },
  {
    title: "Commercial & Office Spaces",
    description:
      "Elevate your professional environment with designs that inspire productivity. We specialize in modern workspaces, retail outlets, and hospitality interiors.",
    image: "/images/modern-workspace-after.jpg",
  },
  {
    title: "Full Home Renovation",
    description:
      "Complete spatial transformations from concept to execution. Our team manages every detail to breathe new life into existing structures.",
    image: "/images/minimalist-after.jpg",
  },
  {
    title: "Kitchen & Bath Styling",
    description:
      "Specialized design services for the most functional areas of your home, focusing on ergonomics, premium materials, and modern fixtures.",
    image: "/images/kitchen-after.jpg",
  },
  {
    title: "Luxury Suite Curation",
    description:
      "Bespoke bedroom and private suite designs that prioritize rest and refinement, featuring custom furniture and curated lighting schemes.",
    image: "/images/contemporary-bedroom-after.jpg",
  },
]

export default function StackingCardsDemo() {
  return (
    <div className="bg-transparent relative">
      {/* Introduction Section - Scrolls naturally with the page */}
      <div className="relative pt-12 pb-12 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground mb-6">
          Our Premium Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
          Explore our comprehensive range of interior design solutions tailored for modern living.
        </p>
        <div className="animate-bounce py-4">
          <span className="text-2xl text-muted-foreground opacity-50">↓</span>
        </div>
      </div>

      {/* Seamless Stacking Section */}
      <StackingCards
        totalCards={cards.length}
        scaleMultiplier={0.06}
        className="relative"
        id="services"
      >
        {cards.map(({ description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index}>
              <div
                className={cn(
                  "h-[70vh] md:h-[65vh] flex-col md:flex-row aspect-video px-8 py-10 flex w-11/12 md:w-10/12 rounded-[2.5rem] mx-auto relative",
                  "bg-card border border-border/40 shadow-2xl backdrop-blur-md"
                )}
              >
                <div className="flex-1 flex flex-col justify-center pr-0 md:pr-16 mb-8 md:mb-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/60 mb-6 block">
                    Service 0{index + 1}
                  </span>
                  <h3 className="font-light text-4xl md:text-5xl mb-8  text-foreground tracking-tight leading-tight" style={{ color: "#0ea7e8" }}>
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-lg">
                    {description}
                  </p>
                </div>

                <div className="w-full md:w-[60%] rounded-3xl aspect-[4/3] md:aspect-auto relative overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </StackingCardItem>
          )
        })}
      </StackingCards>

      {/* Brand Watermark / Footer */}
      <div className="w-full h-[40vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-secondary/20">
        <h2 className="text-[12vw] font-extralight tracking-[0.25em] text-foreground/10 select-none pointer-events-none uppercase text-center leading-none">
          SPZAORA
          <span className="block text-sm tracking-[0.8em] mt-8 text-foreground/30 font-medium">
            Elevating Interior Standards
          </span>
        </h2>
      </div>
    </div>
  );
}
