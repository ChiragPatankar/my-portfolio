import { useState } from 'react'
import { profile } from '../data/profile'
import { ResumeLink } from './ResumeLink'

const YEAR = new Date().getFullYear()

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="contact container">
      <p className="section__index reveal">04</p>
      <h2 className="contact__title reveal">
        Let's build something <em>real</em>.
      </h2>
      <p className="contact__lede reveal">
        Open to AI engineering internships, co-ops and full-time roles. The fastest way to reach me is email.
      </p>
      <div className="contact__actions reveal">
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          {profile.email}
        </a>
        <button className="btn" onClick={copy}>
          {copied ? 'Copied ✓' : 'Copy email'}
        </button>
        <ResumeLink />
      </div>
      <ul className="socials reveal">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer">
              {s.label} <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span>© {YEAR} {profile.name}</span>
        <span>Built with React + TypeScript</span>
      </footer>
    </section>
  )
}
