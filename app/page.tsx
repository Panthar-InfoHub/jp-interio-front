"use client"

import CTASection from "@/components/Cta-section"
import Footer from "@/components/footer"
import Philosophy from "@/components/philosophy"
import { RedesignForm } from "@/components/redesign-form"
import SelectedWorks from "@/components/selectd-work"
import Services from "@/components/non-used-components/services"
import Testimonials from "@/components/testimonial"
import Gallery from "@/components/sliding/gallery"
import UsageStatus from "@/components/usageStatus"
import { useEffect } from "react"
import { useUserStore } from "@/store/useUserStore"
import { useSession } from "next-auth/react"
import StackingCardsDemo from "@/components/services-stack-cards"
import { useRouter } from "next/navigation"

export default function Home() {
  const { status } = useSession()
  const { user, loading, fetchUser } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      fetchUser()
    }
  }, [status])


  return (
    <main className="min-h-screen bg-background selection:bg-[#0ea7e8]/10">
      {/* Hero Section - Refined & Centered */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#0ea7e8]/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/40 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea7e8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Powered by Advanced AI
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8 leading-[1.05]">
            Reimagine <br />
            <span className="text-muted-foreground italic">Your Space</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Upload an image of your interior and describe your vision. Our AI crafts sophisticated
            redesign suggestions tailored to your unique architectural DNA.
          </p>
        </div>
      </section>

      {/* Form Section - Balanced Center Focus */}
      <section className="pb-32 px-4 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col xl:flex-row items-start justify-center gap-10 lg:gap-16">

            {/* Left Spacer - Ensures perfect centering for the form */}
            <div className="hidden xl:block w-80 shrink-0" aria-hidden="true" />

            {/* Main Form Area - Central Focal Point */}
            <div className="w-full max-w-3xl relative group z-10">
              {/* Mobile Status - Visible only on mobile above the form */}
              {status === "authenticated" && (user || loading) && (
                <div className="xl:hidden mb-10">
                  <UsageStatus user={user} loading={loading} />
                </div>
              )}

              <div className="relative">
                {/* Decorative sophisticated glow */}
                <div className="absolute -inset-4 bg-gradient-to-b from-[#0ea7e8]/5 to-transparent rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                <RedesignForm />
              </div>
            </div>

            {/* Sidebar - Side Status & Info */}
            <aside className="w-full xl:w-80 shrink-0 sticky top-24 z-10">
              {status === "authenticated" && (user || loading) ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
                  <div className="hidden xl:block">
                    <UsageStatus user={user} loading={loading} />
                  </div>

                  <div className="p-8 rounded-[2.5rem] bg-secondary/20 border border-border/40 backdrop-blur-sm group hover:bg-secondary/30 transition-colors duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0ea7e8]" />
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">Optimization</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      Capture high-resolution photos from a room corner for maximum depth and architectural detail.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-[2.5rem] bg-card border border-border hover:border-[#0ea7e8]/20 shadow-2xl relative overflow-hidden group transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea7e8]/5 rounded-full -mr-16 -mt-16 transition-transform duration-1000 group-hover:scale-110" />
                  <h3 className="text-xl font-light tracking-tight text-foreground mb-4">Elevate Design</h3>
                  <p className="text-xs text-muted-foreground mb-8 leading-relaxed font-light">
                    Join our community to save redesigns and explore premium architectural styles.
                  </p>
                  <button
                    onClick={() => router.push("/signup")}
                    className="w-full py-3.5 bg-[#0ea7e8] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#0ea7e8]/20 hover:shadow-[#0ea7e8]/40 transition-all active:scale-95"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </aside>

          </div>
        </div>
      </section>

      <div className="space-y-32">
        <Gallery />
        <StackingCardsDemo />
        <Philosophy />
        <Testimonials />
        <CTASection />
      </div>
    </main>
  );
}
