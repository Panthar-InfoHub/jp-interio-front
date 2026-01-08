"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="SPZADORA Logo" width={80} height={80} className="h-auto" />
          <div>
            <div className="font-bold text-lg text-foreground">Spzaora</div>
            <div className="text-xs text-gray-600">Designing Dreams, Crafting Homes</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-8">
            <Link href="#portfolio" className="text-sm text-foreground hover:text-cyan-500 transition">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm text-foreground hover:text-cyan-500 transition">
              About
            </Link>
            <Link href="#services" className="text-sm text-foreground hover:text-cyan-500 transition">
              Services
            </Link>
            <Link href="#contact" className="text-sm text-foreground hover:text-cyan-500 transition">
              Contact
            </Link>
          </nav>
          <button className="px-6 py-2 bg-[#14c8eb] text-black rounded text-sm hover:opacity-90 transition font-medium">
            Try Now
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="hidden max-md:block text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <nav className="absolute top-16 left-0 right-0 bg-white border-b border-border p-6 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#portfolio" className="text-sm text-foreground">
                Portfolio
              </Link>
              <Link href="#about" className="text-sm text-foreground">
                About
              </Link>
              <Link href="#services" className="text-sm text-foreground">
                Services
              </Link>
              <Link href="#contact" className="text-sm text-foreground">
                Contact
              </Link>
              <button className="px-4 py-2 bg-[#14c8eb] text-black rounded text-sm w-full font-medium">
                Try Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
