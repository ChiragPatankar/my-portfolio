import { profile } from '../data/profile'

/** Downloads the resume PDF. Renders nothing if no resume is set. */
export function ResumeLink({ className = 'btn', label = 'Download resume' }: { className?: string; label?: string }) {
  if (!profile.resume) return null
  return (
    <a
      href={profile.resume}
      download
      className={className}
      aria-label={`${label} (PDF)`}
      type="application/pdf"
    >
      {label}
      <svg className="dl-icon" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M3 13.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
