import { achievements, profile, skills } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="03" title="About">
      <div className="about">
        <div className="about__text reveal">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a.title} className="reveal">
              <h3>{a.href ? <a href={a.href}>{a.title}</a> : a.title}</h3>
              <p>{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills">
        {skills.map((g) => (
          <div key={g.title} className="skills__group reveal">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
