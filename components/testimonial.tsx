"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner, NYC",
      content:
        "spzaora completely transformed our outdated living room into a modern masterpiece. The attention to detail was incredible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content:
        "Working with the team was a breeze. They understood our vision immediately and delivered beyond our expectations.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "CEO, StartUp Inc.",
      content:
        "The best investment we made for our new office. The design has actually improved team morale and productivity.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Client Stories</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8    border border-border rounded-lg" style={{ backgroundColor: "#f5f5f5" }}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  /* change star color to cyan */
                  <Star key={i} className="w-4 h-4 fill-[#14c8eb] text-[#14c8eb]" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm">{testimonial.content}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
