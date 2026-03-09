export default function SkeletonCard() {
  return (
    <div className="bg-dark-700 overflow-hidden">
      {/* Image skeleton */}
      <div className="aspect-[4/3] shimmer" />
      {/* Content skeleton */}
      <div className="p-4 space-y-2">
        <div className="h-4 w-24 shimmer rounded" />
        <div className="h-3 w-full shimmer rounded" />
        <div className="h-3 w-3/4 shimmer rounded" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
