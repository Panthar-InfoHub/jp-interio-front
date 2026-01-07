"use client"

import { Home, Building2, MessageSquare } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description:
        "From complete home renovations to single-room makeovers, we create spaces that reflect your personality.",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Innovative office and retail designs that enhance productivity and brand identity.",
    },
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Expert advice on color palettes, furniture selection, and spatial planning for DIY enthusiasts.",
    },
  ]

  return (
    <section  id="services" className="py-16 md:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Comprehensive design solutions tailored to your unique lifestyle and requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="p-8 rounded-lg border border-border" style={{ backgroundColor: "#f5f5f5" }}>
                <Icon className="w-8 h-8 text-[#14c8eb] mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
