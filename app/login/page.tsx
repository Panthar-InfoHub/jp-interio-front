'use client'

import React from "react"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
// import { login } from "@/actions/authentication"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Email login handler
    console.log('Email login:', email)

    // const resp = login("pulkitshukla001@gmail.com")
    
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            {/* <Image
              src="/images/spzadora-logo.png"
              alt="SPZADORA Logo"
              width={80}
              height={80}
              className="h-auto w-auto"
            /> */}
          </div>
          <h1 className="text-3xl font-bold text-foreground text-center">SPZADORA</h1>
          <p className="text-sm text-muted-foreground mt-1 text-center">
            Designing Dreams, Crafting Homes
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground text-center">Sign In</h2>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent transition-all"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan hover:bg-cyan/90 text-black font-medium py-3"
            >
              {isLoading ? 'Signing in...' : 'Continue with Email'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Don't have an account?
            </p>
            <Link href="/signup">
              <Button
                type="button"
                variant="outline"
                className="w-full border-cyan text-cyan hover:bg-cyan/5 bg-transparent"
              >
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
