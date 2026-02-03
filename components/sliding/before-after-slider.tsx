'use client'

import React from "react"

import { useState, useRef, useEffect } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left

    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(newPosition)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left

    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(newPosition)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleGlobalMouseUp = handleMouseUp
    const handleGlobalTouchEnd = handleTouchEnd

    window.addEventListener('mouseup', handleGlobalMouseUp)
    window.addEventListener('touchend', handleGlobalTouchEnd)

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      window.removeEventListener('touchend', handleGlobalTouchEnd)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-lg bg-gray-200 cursor-col-resize select-none"
      onMouseMove={handleContainerMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{
          width: `${sliderPosition}%`
        }}
      >
        <img
          src={beforeImage || "/placeholder.svg"}
          alt={beforeLabel}
          className="h-full object-cover"
          draggable={false}
          style={{
            width: containerRef.current?.offsetWidth || '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0
          }}
        />
      </div>

      {/* Slider Handle - White Line Only */}
      <div
        className="absolute top-0 w-1 h-full bg-white cursor-col-resize"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)'
        }}
      />

      {/* Before Label - Fades based on slider position */}
      <div 
        className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-semibold transition-opacity duration-300"
        style={{
          opacity: Math.max(0, (100 - sliderPosition) / 100)
        }}
      >
        {beforeLabel}
      </div>

      {/* After Label - Fades based on slider position */}
      <div 
        className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-semibold transition-opacity duration-300"
        style={{
          opacity: Math.max(0, (sliderPosition - 30) / 70)
        }}
      >
        {afterLabel}
      </div>
    </div>
  )
}
