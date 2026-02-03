import { MapPin } from 'lucide-react'
import { BeforeAfterSlider } from './before-after-slider'

interface BeforeAfterCardProps {
  title: string
  beforeImage: string
  afterImage: string
  location: string
  description: string
}

export function BeforeAfterCard({
  title,
  beforeImage,
  afterImage,
  location,
  description
}: BeforeAfterCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Large Image Container with Slider */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          beforeLabel="Before"
          afterLabel="After"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center gap-2 mt-3 mb-3">
          <MapPin className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 font-medium">{location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
