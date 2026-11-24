export type Category = 'Agents & MCP' | 'GenAI Products' | 'ML & Vision' | 'Data & Analytics'

export interface Link {
  label: string
  href: string
}

export interface Metric {
  value: string
  label: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  category: Category
  year: number
  stack: string[]
  highlights: string[]
  metrics?: Metric[]
  links: Link[]
  /** Event or context, e.g. a hackathon name. */
  context?: string
  /** Teammates to credit, when it wasn't solo work. */
  team?: string
  featured?: boolean
}

export interface Experience {
  role: string
  org: string
  period: string
  location?: string
  points: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  details?: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Achievement {
  title: string
  detail: string
  href?: string
}

export interface Profile {
  name: string
  role: string
  headline: string
  location: string
  /** Path under public/, e.g. '/headshot.jpg'. */
  photo?: string
  summary: string[]
  email: string
  socials: Link[]
  focus: string[]
}
