"use client"

export default function Philosophy() {
  return (
    <section id="about" className="py-16 md:py-24 text-orange-400 bg-card" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-[#14c8eb] uppercase tracking-wide mb-6">Our Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Design is not just about how it looks, but how it feels.
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At spzaora, we believe that your environment profoundly impacts your well-being. Our approach blends
              strict functionality with aesthetic purity, creating spaces that are as livable as they are beautiful.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just fill rooms with furniture; we curate atmospheres. Every texture, color, and light source is
              chosen with intention to tell your unique story.
            </p>
          </div>

          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <img
              src="/minimalist-interior-design-aesthetic-philosophy.jpg"
              alt="Philosophy showcase"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div>
            <p className="text-[#14c8eb] font-semibold text-sm mb-2">100%</p>
            <p className="text-foreground font-semibold text-lg">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-[#14c8eb] font-semibold text-sm mb-2">150+</p>
            <p className="text-foreground font-semibold text-lg">Projects Completed</p>
          </div>
          <div>
            <p className="text-[#14c8eb] font-semibold text-sm mb-2">12</p>
            <p className="text-foreground font-semibold text-lg">Design Awards</p>
          </div>
        </div>
      </div>
    </section>
  )
}
