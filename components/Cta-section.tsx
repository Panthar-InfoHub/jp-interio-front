"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className=" px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0a0f2c] p-12 md:p-24 text-center shadow-2xl border border-white/5">

          {/* Modern Background Effects */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#14c8eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#14c8eb] rounded-full blur-[140px] opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#14c8eb] text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-4 h-4" />
              Limited Appointments Available
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tighter">
              Turn your dream <br className="hidden md:block" />
              into a <span className="bg-gradient-to-r from-[#14c8eb] to-blue-400 bg-clip-text text-transparent italic">masterpiece.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Don't settle for average. Let's create an environment that inspires you every single day.
            </p>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button className="group flex items-center justify-center gap-3 px-12 py-5 bg-[#14c8eb] text-black rounded-2xl font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(20,200,235,0.5)] active:scale-95">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm active:scale-95">
                View Portfolio
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
