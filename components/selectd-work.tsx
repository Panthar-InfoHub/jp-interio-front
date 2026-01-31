"use client"

import { Bath, Bed, Clipboard, MapPin, Maximize2, Star } from "lucide-react"

export default function SelectedWorks() {
  const projects = [
    { title: "Urban Loft", location: "New York", query: "Urban loft interior design apartment" },
    { title: "Minimalist Villa", location: "Los Angeles", query: "Minimalist villa interior design living room" },
    { title: "Modern Workspace", location: "San Francisco", query: "Modern workspace office interior design" },
    { title: "Seaside Retreat", location: "Miami", query: "Seaside retreat luxury coastal interior design" },
    { title: "City Penthouse", location: "Chicago", query: "City penthouse modern interior design" },
    { title: "Creative Studio", location: "Austin", query: "Creative studio interior design workspace" },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Selected Works</h2>
          <p className="text-muted-foreground text-lg">Curated interior experiences from around the globe.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Card Container */}
              <div className="rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow duration-300">

                {/* Image Section with Heart Button */}
                <div className="relative aspect-square overflow-hidden p-2">
                  <img
                    src={`/images/project-${idx + 1}.jpg`}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <em className="text-sm text-muted-foreground">{project.query}</em>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
