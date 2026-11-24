import { education, experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience & education">
      <div className="split">
        <ol className="timeline">
          {experience.map((e) => (
            <li
              key={`${e.org}-${e.role}`}
              className={`timeline__item reveal ${e.period.includes('Present') ? 'is-current' : ''}`}
            >
              <div className="timeline__period">{e.period}</div>
              <div>
                <h3>{e.role}</h3>
                <p className="timeline__org">
                  {e.org}
                  {e.location && <span> · {e.location}</span>}
                </p>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="edu">
          {education.map((ed) => (
            <div key={ed.school} className="edu__item reveal">
              <p className="edu__period">{ed.period}</p>
              <h3>{ed.school}</h3>
              <p>{ed.degree}</p>
              <p className="muted">
                {ed.location}
                {ed.details?.map((d) => ` · ${d}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
