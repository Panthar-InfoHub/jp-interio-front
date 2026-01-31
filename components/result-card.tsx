import { CheckCircle2, RefreshCw, Loader2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ResultCardProps {
  result: {
    imageUrl: string
    description: string
  }
  onRedesign?: () => void
  isPending?: boolean
}

export function ResultCard({ result, onRedesign, isPending }: ResultCardProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-light text-foreground">Your Redesigned Space</h2>
        </div>

        {onRedesign && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRedesign}
            disabled={isPending}
            className="hidden md:flex gap-2 border-[#14c8eb] text-[#14c8eb] hover:bg-[#14c8eb] hover:text-white"
          >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            Redesign Again
          </Button>
        )}
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

      {onRedesign && (
        <Button
          variant="outline"
          onClick={onRedesign}
          disabled={isPending}
          className="w-full md:hidden gap-2 border-[#14c8eb] text-[#14c8eb] hover:bg-[#14c8eb] hover:text-white"
        >
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
          Redesign Again
        </Button>
      )}

      <div className="bg-secondary/50 border border-border rounded-lg p-6">
      {result.description.split('\n').map((line, i) => 
        <p key={i} className="text-foreground leading-relaxed whitespace-pre-wrap">{line}</p>)}
      </div>

      {onRedesign && (
        <div className="flex justify-center md:hidden">
          {/* Mobile spacer if needed, but handled by gap above */}
        </div>
      )}

      <div className="hidden md:flex justify-end">
        {onRedesign && (
          <Button
            onClick={onRedesign}
            disabled={isPending}
            className="gap-2 bg-gradient-to-r from-[#14c8eb] to-[#0ea5e9] text-white shadow-lg shadow-cyan-500/20"
          >
            {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            Try Another Variation
          </Button>
        )}
      </div>
    </div>
  )
}
