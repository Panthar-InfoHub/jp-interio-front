"use client"

export default function SelectedWorks() {
  const projects = [
    { title: "Urban Loft", location: "New York", query: "urban loft interior design apartment" },
    { title: "Minimalist Villa", location: "Los Angeles", query: "minimalist villa interior design living room" },
    { title: "Modern Workspace", location: "San Francisco", query: "modern workspace office interior design" },
    { title: "Seaside Retreat", location: "Miami", query: "seaside retreat luxury coastal interior design" },
    { title: "City Penthouse", location: "Chicago", query: "city penthouse modern interior design" },
    { title: "Creative Studio", location: "Austin", query: "creative studio interior design workspace" },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Works</h2>
          <button className="text-[#14c8eb] hover:opacity-80 transition font-medium text-sm">
            View All Projects →
          </button>
        </div>
        <p className="text-muted-foreground mb-12 text-lg">Curated interior experiences from around the globe.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="bg-muted rounded-lg aspect-square mb-4 overflow-hidden">
                <img
                  src={`/images/project-${idx + 1}.jpg`}
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-[#14c8eb] font-medium">{project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
