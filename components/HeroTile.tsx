'use client'
import { motion } from 'framer-motion'
import { Flame, Trophy, BookOpen } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{
        scale: 1.005,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative rounded-2xl p-6 md:p-8 col-span-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #13131f 0%, #1a1a2e 50%, #16213e 100%)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: '0 0 40px rgba(99, 102, 241, 0.05)'
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20px', left: '30%',
        width: '150px', height: '150px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      <div className="relative z-10 flex flex-col md:flex-row
                      items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-gray-400 tracking-wide">
              Active session
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2"
            style={{ color: '#ffffff' }}>
            Welcome back, <span style={{
              background: 'linear-gradient(90deg, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Sneha!</span>
          </h1>
          <p className="text-gray-400 text-sm">
            You have 4 active courses · Keep up the momentum 🚀
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center rounded-2xl p-4 min-w-[80px]"
            style={{
              background: 'rgba(251, 146, 60, 0.08)',
              border: '1px solid rgba(251, 146, 60, 0.2)'
            }}
          >
            <Flame size={22} style={{ color: '#fb923c' }} className="mb-1" />
            <span className="text-xl font-bold" style={{ color: '#fb923c' }}>12</span>
            <span className="text-xs text-gray-500 mt-0.5">streak</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center rounded-2xl p-4 min-w-[80px]"
            style={{
              background: 'rgba(250, 204, 21, 0.08)',
              border: '1px solid rgba(250, 204, 21, 0.2)'
            }}
          >
            <Trophy size={22} style={{ color: '#facc15' }} className="mb-1" />
            <span className="text-xl font-bold" style={{ color: '#facc15' }}>3</span>
            <span className="text-xs text-gray-500 mt-0.5">done</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center rounded-2xl p-4 min-w-[80px]"
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}
          >
            <BookOpen size={22} style={{ color: '#818cf8' }} className="mb-1" />
            <span className="text-xl font-bold" style={{ color: '#818cf8' }}>4</span>
            <span className="text-xs text-gray-500 mt-0.5">active</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}