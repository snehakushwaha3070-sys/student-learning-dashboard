import { Suspense } from 'react'
import { supabase } from '@/lib/supabase'
import type { Course } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import ActivityTile from '@/components/ActivityTile'
import SkeletonCard from '@/components/SkeletonCard'
import CoursesGrid from '@/components/CoursesGrid'

async function getCourses(): Promise<Course[]> {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error
    return data || []
  } catch (err) {
    console.error('Failed to fetch courses:', err)
    return []
  }
}

export default async function Home() {
  const courses = await getCourses()

  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
       <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-4 pt-6 md:pt-6">
          <HeroTile />
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                Active Courses
              </h2>
              <span className="text-xs text-gray-600">
                {courses.length} courses
              </span>
            </div>
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[0,1,2,3].map((i) => <SkeletonCard key={i} />)}
              </div>
            }>
              <CoursesGrid courses={courses} />
            </Suspense>
          </div>
          <ActivityTile />
        </div>
      </main>
    </div>
  )
}