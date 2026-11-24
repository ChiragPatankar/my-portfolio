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

        <div className="about__side">
          {profile.photo && (
            <figure className="portrait reveal">
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={800} height={800} loading="lazy" />
              <figcaption>
                <span className="portrait__dot" aria-hidden />
                {profile.location}
              </figcaption>
            </figure>
          )}
          <ul className="achievements">
            {achievements.map((a) => (
              <li key={a.title} className="reveal">
                <h3>{a.href ? <a href={a.href}>{a.title}</a> : a.title}</h3>
                <p>{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
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
