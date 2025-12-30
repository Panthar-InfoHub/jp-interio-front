import { Skeleton } from "@/components/ui/skeleton"

export function ResultSkeleton() {
  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <h2 className="text-2xl font-light text-foreground">Your Redesigned Space</h2>
      <div className="space-y-4">
        <Skeleton className="h-96 w-full rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  )
}
