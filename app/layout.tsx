import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Ubuntu } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"
import Footer from "@/components/footer"
import Header from "@/components/ui/header"
import { SessionProvider } from "next-auth/react"

const poppins = Ubuntu({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Spzaora",
  description: "Transform your interior spaces with AI-powered design suggestions",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.variable}`}>
        <SessionProvider>
          <Header />
          {children}
          <Analytics />
          <Toaster richColors position="top-center" />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
