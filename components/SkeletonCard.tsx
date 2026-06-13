export default function SkeletonCard() {
  return (
    <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-5 animate-pulse">
      <div className="w-10 h-10 bg-[#1e1e2e] rounded-xl mb-4" />
      <div className="h-4 bg-[#1e1e2e] rounded mb-2 w-3/4" />
      <div className="h-3 bg-[#1e1e2e] rounded mb-4 w-1/2" />
      <div className="h-1.5 bg-[#1e1e2e] rounded-full" />
    </div>
  )
}