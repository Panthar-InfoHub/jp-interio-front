"use client"

import { Sparkles, Brush, Hammer, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Residential Design",
      description: "We create spaces that reflect your personality and style.",
      active: true
    },
    {
      icon: Brush,
      title: "Commercial Spaces",
      description: "Innovative office and retail designs that enhance productivity.",
      active: false
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Expert advice on spatial planning and material selection.",
      active: false
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground mb-16 text-lg max-w-2xl">
          Comprehensive design solutions tailored to your unique lifestyle and requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`flex items-start gap-6 p-8 rounded-2xl transition-all duration-300 bg-[#f3f4f8] text-foreground hover:bg-[#e8eaf2]" `}
              >
                <div className={`p-4 rounded-xl ${service.active ? "bg-white" : "bg-white"
                  }`}>
                  <Icon className={`w-8 h-8 ${service.active ? "text-[#14c8eb]" : "text-[#14c8eb]"}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${service.active ? "text-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${service.active ? "text-muted-foreground" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
