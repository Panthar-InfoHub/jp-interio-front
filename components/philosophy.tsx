"use client"

import { ArrowRight } from "lucide-react"

export default function Philosophy() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image with floating card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/minimalist-interior-design-aesthetic-philosophy.jpg"
                alt="Philosophy showcase"
                className="w-full h-full object-cover"
              />
              {/* Floating card on image */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sm font-semibold text-[#14c8eb] uppercase tracking-wide">
                  Our Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content aligned like image 2 */}
          <div className="space-y-10">
            {/* Header and text at the top (Image 2 style) */}
            <div className="space-y-6">
              <h3 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                We provide you the best experience
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                You don't have to worry about the results because all of these interiors are made by professionals in
                their fields with an elegant and luxurious style and with premium quality materials. At spzaora,
                we believe that your environment profoundly impacts your well-being.
              </p>
            </div>

            {/* Statistics (Compact style like image 2) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground font-medium mt-1 leading-tight">
                  Client <span className="block">satisfaction</span>
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground font-medium mt-1 leading-tight">
                  Awards <span className="block">gained</span>
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground font-medium mt-1 leading-tight">
                  Projects <span className="block">done</span>
                </p>
              </div>
            </div>

            {/* Button */}
            {/* <div className="pt-4">
              <button className="group flex items-center gap-3 px-8 py-4 border-2 border-foreground rounded-lg font-bold text-foreground hover:bg-foreground hover:text-white transition-all duration-300">
                Learn more
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

