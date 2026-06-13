'use client'
import { motion } from 'framer-motion'
import CourseCard from './CourseCard'
import type { Course } from '@/lib/supabase'

export default function CoursesGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        No courses found. Add some in Supabase!
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  )
}