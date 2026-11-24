import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { Terminal } from './Terminal'

/** Delay index for the staggered entrance animation. */
const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  const words = profile.name.split(' ')
  let letter = 0

  return (
    <section id="top" className="hero container">
      <div className="hero__bg" aria-hidden>
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__text">
        <p className="eyebrow enter" style={step(0)}>
          <span className="dot" aria-hidden /> {profile.role} · {profile.location}
        </p>
        <h1 className="hero__title" aria-label={profile.name}>
          {words.map((w) => (
            <span key={w} className="hero__word" aria-hidden>
              {[...w].map((ch, j) => (
                <span key={j} className="hero__letter" style={{ '--l': letter++ } as CSSProperties}>
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero__headline enter" style={step(3)}>
          {profile.headline}
        </p>
        <ul className="chips enter" style={step(4)} aria-label="Focus areas">
          {profile.focus.map((f) => (
            <li key={f} className="chip">
              {f}
            </li>
          ))}
        </ul>
        <div className="hero__cta enter" style={step(5)}>
          <a href="#work" className="btn btn--primary">
            See my work <span className="btn__arrow" aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn">
            Get in touch
          </a>
        </div>
      </div>

      <div className="enter enter--slow" style={step(4)}>
        <Terminal />
      </div>
    </section>
  )
}
