import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
  return (
    <div className="flex h-screen bg-[#0a0a0f]">
      <div className="w-16 bg-[#111118] border-r border-[#1e1e2e] h-screen shrink-0" />
      <div className="flex-1 p-6 space-y-4">
        {/* Hero skeleton */}
        <div className="w-full h-32 bg-[#111118] border border-[#1e1e2e]
                        rounded-2xl animate-pulse" />
        {/* Course skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
        {/* Activity skeleton */}
        <div className="w-full h-40 bg-[#111118] border border-[#1e1e2e]
                        rounded-2xl animate-pulse" />
      </div>
    </div>
  )
}