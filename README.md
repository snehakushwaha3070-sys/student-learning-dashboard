# Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js 14, Supabase, Framer Motion, and Tailwind CSS.

## Live Demo
[View Live App](https://your-vercel-url.vercel.app)

## Tech Stack
- **Next.js 14** — App Router with React Server Components
- **Supabase** — PostgreSQL database for live course data
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Spring physics animations
- **TypeScript** — Full type safety
- **Lucide React** — Icon library

## Architecture

### Server vs Client Components
- `app/page.tsx` — Server Component, fetches courses directly from Supabase on the server before rendering
- `components/CoursesGrid.tsx` — Client Component, handles staggered animations
- `components/Sidebar.tsx` — Client Component, handles collapse state and nav interactions
- `components/CourseCard.tsx` — Client Component, handles hover animations and progress bar animation
- `components/HeroTile.tsx` — Client Component, entrance animations
- `components/ActivityTile.tsx` — Client Component, contribution graph

### Data Fetching
Data is fetched server-side in `page.tsx` using Supabase JS client.
This means the HTML is pre-rendered with course data before reaching the browser — faster load, better SEO.

### Animation Strategy
- All animations use `transform` and `opacity` only — zero layout shifts
- Spring physics used throughout: `type: spring, stiffness: 300, damping: 20`
- Staggered entrance: each course card delays by `index * 0.1` seconds
- `layoutId="activeNav"` for smooth sidebar highlight transition
- Progress bars animate from 0% to actual value on mount

### Loading States
- `app/loading.tsx` shows skeleton loaders while data fetches
- `React Suspense` wraps the courses grid for granular loading

### Responsive Design
- Desktop (>1024px): Full sidebar + 4-column bento grid
- Tablet (768-1024px): Collapsible icon sidebar + 2-column grid
- Mobile (<768px): Bottom navigation bar + single column stack

## Supabase Schema
```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamptz default now()
);
```

## Setup Instructions
1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local`
4. Fill in your Supabase URL and anon key
5. Run: `npm run dev`
6. Open: `http://localhost:3000`

## Environment Variables
See `.env.example` for required variables.
Never commit your actual `.env.local` file.

## Challenges Faced
- Hydration mismatch from `Math.random()` in ActivityTile — fixed using `useMemo` with deterministic values
- Icon name case sensitivity from Supabase data — handled with a strict iconMap
- Framer Motion server/client boundary — wrapped animated components in `'use client'`