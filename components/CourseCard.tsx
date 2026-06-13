'use client'
import { motion } from 'framer-motion'
import { Code, Brain, Palette, Server, BookOpen } from 'lucide-react'
import { Course } from '@/lib/supabase'

const iconMap: Record<string, React.ElementType> = {
  Code, Brain, Palette, Server, BookOpen
}

const themeMap: Record<string, {
  icon: string, glow: string,
  bar: string, bg: string, border: string
}> = {
  Code: {
    icon: '#60a5fa', glow: 'rgba(96,165,250,0.08)',
    bar: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    bg: 'rgba(59,130,246,0.05)', border: 'rgba(59,130,246,0.15)'
  },
  Brain: {
    icon: '#a78bfa', glow: 'rgba(167,139,250,0.08)',
    bar: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
    bg: 'rgba(139,92,246,0.05)', border: 'rgba(139,92,246,0.15)'
  },
  Palette: {
    icon: '#f472b6', glow: 'rgba(244,114,182,0.08)',
    bar: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    bg: 'rgba(236,72,153,0.05)', border: 'rgba(236,72,153,0.15)'
  },
  Server: {
    icon: '#34d399', glow: 'rgba(52,211,153,0.08)',
    bar: 'linear-gradient(90deg, #10b981, #06b6d4)',
    bg: 'rgba(16,185,129,0.05)', border: 'rgba(16,185,129,0.15)'
  },
  BookOpen: {
    icon: '#fbbf24', glow: 'rgba(251,191,36,0.08)',
    bar: 'linear-gradient(90deg, #f59e0b, #ef4444)',
    bg: 'rgba(245,158,11,0.05)', border: 'rgba(245,158,11,0.15)'
  },
}

export default function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon_name] || BookOpen
  const theme = themeMap[course.icon_name] || themeMap.BookOpen

  return (
    <motion.article
      whileHover={{
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative rounded-2xl p-5 cursor-pointer overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #111118, ${theme.bg})`,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 0 20px ${theme.glow}`
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${theme.icon}40, transparent)`
      }} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl flex items-center
                        justify-center mb-4"
          style={{ background: theme.glow, border: `1px solid ${theme.border}` }}
        >
          <Icon size={18} style={{ color: theme.icon }} />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-white mb-1 text-sm leading-snug">
          {course.title}
        </h3>
        <p className="text-xs mb-4" style={{ color: theme.icon, opacity: 0.8 }}>
          {course.progress}% complete
        </p>

        {/* Progress Bar */}
        <div className="h-1 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            className="h-full rounded-full"
            style={{ background: theme.bar }}
          />
        </div>
      </div>
    </motion.article>
  )
}