import { BeforeAfterCard } from "./before-after-card"

const galleryItems = [
  {
    title: 'Urban Loft',
    beforeImage: '/images/urban-loft-before.jpg',
    afterImage: '/images/urban-loft-after.jpg',
    location: 'New York',
    description: 'Urban loft interior design apartment'
  },
  {
    title: 'Minimalist Villa',
    beforeImage: '/images/minimalist-villa-before.jpg',
    afterImage: '/images/minimalist-villa-after.jpg',
    location: 'Los Angeles',
    description: 'Minimalist villa interior design living room'
  },
  {
    title: 'Modern Workspace',
    beforeImage: '/images/modern-workspace-before.jpg',
    afterImage: '/images/modern-workspace-after.jpg',
    location: 'San Francisco',
    description: 'Modern workspace office interior design'
  },
  {
    title: 'Scandinavian Home',
    beforeImage: '/images/scandinavian-home-before.jpg',
    afterImage: '/images/scandinavian-home-after.jpg',
    location: 'Copenhagen',
    description: 'Scandinavian apartment interior design'
  },
  {
    title: 'Contemporary Bedroom',
    beforeImage: '/images/contemporary-bedroom-before.jpg',
    afterImage: '/images/contemporary-bedroom-after.jpg',
    location: 'Miami',
    description: 'Contemporary bedroom interior design'
  },
  {
    title: 'Industrial Loft',
    beforeImage: '/images/industrial-loft-before.jpg',
    afterImage: '/images/industrial-loft-after.jpg',
    location: 'Chicago',
    description: 'Industrial loft interior design space'
  }
]

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div id="gallery" className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Interior Design Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning interior transformations across unique spaces and design styles.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <BeforeAfterCard
              key={item.title}
              title={item.title}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              location={item.location}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
