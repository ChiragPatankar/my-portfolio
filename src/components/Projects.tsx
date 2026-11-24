import { useMemo, useState } from 'react'
import type { PointerEvent } from 'react'
import { useCountUp } from '../hooks'
import { projects } from '../data/profile'
import type { Category, Metric, Project } from '../data/types'
import { Section } from './Section'

const categories: Category[] = ['Agents & MCP', 'GenAI Products', 'ML & Vision', 'Data & Analytics']
type Filter = 'All' | Category

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(
    () => projects.filter((p) => filter === 'All' || p.category === filter),
    [filter],
  )
  const featured = visible.filter((p) => p.featured)
  const more = visible.filter((p) => !p.featured)

  return (
    <Section id="work" index="01" title="Selected work" lede="Things I've built and shipped, newest first.">
      <div className="filters reveal" role="group" aria-label="Filter projects">
        {(['All', ...categories] as Filter[]).map((c) => {
          const count = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length
          return (
            <button
              key={c}
              className={`filter ${filter === c ? 'is-active' : ''}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c} <span>{count}</span>
            </button>
          )
        })}
      </div>

      {featured.length > 0 && (
        <div className="featured" key={filter}>
          {featured.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      {more.length > 0 && (
        <>
          <h3 className="subhead reveal">More projects</h3>
          <ul className="more" key={filter}>
            {more.map((p) => (
              <MoreRow key={p.slug} project={p} />
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}

/** Moves the card's spotlight to follow the pointer. */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function FeaturedCard({ project: p }: { project: Project }) {
  return (
    <article className="card reveal" onPointerMove={trackPointer}>
      <div className="card__meta">
        <span>{p.category}</span>
        <span>{p.year}</span>
      </div>
      <h3 className="card__title">{p.name}</h3>
      <p className="card__tagline">{p.tagline}</p>
      {p.context && <p className="card__context">{p.context}</p>}
      <p className="card__desc">{p.description}</p>

      {p.metrics && (
        <dl className="metrics">
          {p.metrics.map((m) => (
            <MetricItem key={m.label} metric={m} />
          ))}
        </dl>
      )}

      {p.highlights.length > 0 && (
        <ul className="card__points">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {p.team && <p className="card__team">{p.team}</p>}

      <div className="card__footer">
        <ul className="stack" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ProjectLinks project={p} />
      </div>
    </article>
  )
}

function MetricItem({ metric }: { metric: Metric }) {
  const [ref, display] = useCountUp(metric.value)
  return (
    <div>
      <dt ref={ref}>{display}</dt>
      <dd>{metric.label}</dd>
    </div>
  )
}

function MoreRow({ project: p }: { project: Project }) {
  return (
    <li className="more__row reveal">
      <span className="more__year">{p.year}</span>
      <div className="more__body">
        <h4>
          {p.name}
          {p.context && <span className="more__context"> · {p.context}</span>}
        </h4>
        <p>
          {p.tagline} {p.description}
          {p.team && <em> ({p.team})</em>}
        </p>
        <ul className="stack stack--small" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <ProjectLinks project={p} />
    </li>
  )
}

function ProjectLinks({ project: p }: { project: Project }) {
  return (
    <div className="links">
      {p.links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" aria-label={`${p.name}: ${l.label}`}>
          {l.label} <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}
