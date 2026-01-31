"use client"

import { Star, Quote } from "lucide-react"

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
    <section className="py-16 md:py-24" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Client Stories</h2>
        <p className="text-muted-foreground text-lg mb-12">See what our clients are saying about their new spaces.</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] border-none shadow-sm flex flex-col items-start transition-transform hover:-translate-y-1 duration-300"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="mb-8">
                <h4 className="font-bold text-xl text-foreground leading-none mb-1">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
              </div>

              <div className="mb-4">
                <Quote className="w-10 h-10 text-[#14c8eb] opacity-40 rotate-180" />
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed text-base font-medium">
                {testimonial.content}
              </p>

              <div className="mt-auto flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#14c8eb] text-[#14c8eb]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
