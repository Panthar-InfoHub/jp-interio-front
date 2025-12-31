import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface ResultCardProps {
  result: {
    imageUrl: string
    description: string
  }
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-light text-foreground">Your Redesigned Space</h2>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
        <div className="relative aspect-video w-full bg-secondary">
          <Image
            src={result.imageUrl || "/placeholder.svg"}
            alt="Redesigned interior space"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="bg-secondary/50 border border-border rounded-lg p-6">
      {result.description.split('\n').map((line, i) => 
        <p key={i} className="text-foreground leading-relaxed whitespace-pre-wrap">{line}</p>)}
      </div>
    </div>
  )
}
