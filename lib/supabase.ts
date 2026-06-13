import { createClient } from '@supabase/supabase-js'

export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

const supabaseUrl = 'https://udhpbkqhqfugkglojyei.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaHBia3FocWZ1Z2tnbG9qeWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNjIzOTgsImV4cCI6MjA5NjgzODM5OH0.6ENK75KwhT-87-2bpyCsinTPh8ACIURaiKZs4xVS5OE'

export const supabase = createClient(supabaseUrl, supabaseKey)