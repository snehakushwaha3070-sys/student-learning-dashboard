'use client'
import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { useMemo } from 'react'

const intensityClass = (val: number) => {
  if (val === 0) return 'bg-white/5'
  if (val === 1) return 'bg-indigo-900/60'
  if (val === 2) return 'bg-indigo-700/70'
  if (val === 3) return 'bg-indigo-500/80'
  return 'bg-indigo-400'
}

export default function ActivityTile() {
  const data = useMemo(() => {
    return Array.from({ length: 12 }, (_, w) =>
      Array.from({ length: 7 }, (_, d) => ((w * 7 + d) * 3) % 5)
    )
  }, [])

  return (
    <motion.section
      whileHover={{
        scale: 1.005,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Activity size={16} className="text-indigo-400" />
        <h2 className="text-sm font-semibold text-white">Learning Activity</h2>
        <span className="ml-auto text-xs text-gray-500">Last 12 weeks</span>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.003 }}
                className={`w-3 h-3 rounded-sm ${intensityClass(day)}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        <span className="text-xs text-gray-500">Less</span>
        {[0,1,2,3,4].map(v => (
          <div key={v} className={`w-3 h-3 rounded-sm ${intensityClass(v)}`} />
        ))}
        <span className="text-xs text-gray-500">More</span>
      </div>
    </motion.section>
  )
}