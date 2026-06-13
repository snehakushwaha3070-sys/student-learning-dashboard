'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, BookOpen, BarChart2,
  Settings, ChevronLeft, Zap
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart2, label: 'Progress', id: 'progress' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('home')

  return (
    <>
      <motion.nav
        animate={{ width: collapsed ? 68 : 220 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col h-screen p-3 shrink-0 overflow-hidden"
        style={{
          background: '#0d0d14',
          borderRight: '1px solid rgba(255,255,255,0.06)'
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 py-3 mb-6">
          <div className="w-8 h-8 rounded-lg flex items-center
                          justify-center shrink-0"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 0 20px rgba(99,102,241,0.3)'
            }}>
            <Zap size={15} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-semibold text-white text-sm whitespace-nowrap"
                style={{ letterSpacing: '0.02em' }}
              >
                LearnFlow
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex items-center gap-3 p-3
                         rounded-xl text-left w-full transition-colors"
            >
              {active === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.25)'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon
                size={17}
                className="relative z-10 shrink-0"
                style={{ color: active === item.id ? '#818cf8' : '#4b5563' }}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 text-sm whitespace-nowrap"
                    style={{
                      color: active === item.id ? '#ffffff' : '#6b7280',
                      fontWeight: active === item.id ? 500 : 400
                    }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* Collapse btn */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center p-2.5
                     rounded-xl transition-colors mt-2"
          style={{ color: '#4b5563' }}
        >
          <motion.div
            animate={{ rotate: collapsed ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ChevronLeft size={16} />
          </motion.div>
        </button>
      </motion.nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-2"
        style={{
          background: 'rgba(13,13,20,0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
        <div className="flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="flex flex-col items-center gap-1 p-2"
            >
              <item.icon
                size={19}
                style={{ color: active === item.id ? '#818cf8' : '#4b5563' }}
              />
              <span className="text-xs"
                style={{ color: active === item.id ? '#818cf8' : '#4b5563' }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}