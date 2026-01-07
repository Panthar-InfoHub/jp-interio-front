"use client"

export default function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card" style={{ backgroundColor: "#f5f5f5" }}  >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to transform your space?</h2>
        <p className="text-muted-foreground text-lg mb-10">
          Let's discuss your project and see how we can bring your vision to life.
        </p>
        <button className="px-8 py-3 bg-[#14c8eb] text-black rounded hover:opacity-90 transition font-medium">
          Book Free Consultation
        </button>
      </div>
    </section>
  )
}
