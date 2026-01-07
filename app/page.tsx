import CTASection from "@/components/Cta-section"
import Footer from "@/components/footer"
import Philosophy from "@/components/philosophy"
import { RedesignForm } from "@/components/redesign-form"
import SelectedWorks from "@/components/selectd-work"
import Services from "@/components/services"
import Testimonials from "@/components/testimonial"
import Header from "@/components/ui/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      {/* Header */}
      <Header />
      <div className="pt-12 pb-8 border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4 text-pretty">
            Reimagine Your Space
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Upload an image of your interior and describe the design style you envision. Our AI will generate beautiful
            redesign suggestions tailored to your preferences.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <RedesignForm />
        </div>
      </div>

      <SelectedWorks />
      <Services/>
      <Philosophy/>
      <Testimonials/>
      <CTASection  />
      <Footer/>
    </main>
  )
}
