"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Elegant Image Composition */}
          <div className="relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-border/40">
              <Image
                src="/images/minimalist-villa.jpg"
                alt="Architecture and Philosophy"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-6 -right-6 md:right-12 bg-card border border-border/60 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0ea7e8]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea7e8]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Certified Quality</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed font-light">
                Every detail is meticulously crafted to ensure uncompromising luxury.
              </p>
            </div>
          </div>

          {/* Right side - Narrative Content */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-[1px] w-8 bg-[#0ea7e8]"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0ea7e8]">Our Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.15] mb-8 tracking-tight">
              We provide you with a <br />
              <span className="text-muted-foreground italic">transcendent</span> experience
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                At SPZAORA, we believe that your environment profoundly impacts your well-being. Our approach blends timeless aesthetics with modern functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You don&apos;t have to worry about the results because all of these interiors are curated by professionals in their fields with an elegant and luxurious style and with premium quality materials.
              </p>
            </div>

            {/* Statistics Refined */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/60">
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-light text-foreground tracking-tighter">100<span className="text-[#0ea7e8]">%</span></p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-none">
                  Client <br /> Satisfaction
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-light text-foreground tracking-tighter">12</p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-none">
                  Global <br /> Awards
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-light text-foreground tracking-tighter">150<span className="text-[#0ea7e8]">+</span></p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest leading-none">
                  Premium <br /> Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

