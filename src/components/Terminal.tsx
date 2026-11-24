import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks'

const lines = [
  { cmd: 'pip install flake-doctor', out: '11,000+ CI runs · 14 flaky tests found' },
  { cmd: 'npx loganalyzer-mcp', out: 'MCP server ready · 8 tools · 490+ downloads' },
  { cmd: 'open scriptmindai.in', out: 'Live · Next.js on Cloudflare Workers' },
]

/** Total characters typed per line, plus one "tick" to reveal its output. */
const lengths = lines.map((l) => l.cmd.length + 1)
const total = lengths.reduce((a, b) => a + b, 0)

/** A terminal that types each command, then prints its output. */
export function Terminal() {
  const [ticks, setTicks] = useState(() => (prefersReducedMotion() ? total : 0))

  useEffect(() => {
    if (ticks >= total) return
    // Pause before each new command and after printing output, type quickly otherwise.
    let pos = ticks
    let atLineStart = false
    for (const len of lengths) {
      if (pos === 0) atLineStart = true
      if (pos < len) break
      pos -= len
    }
    const delay = ticks === 0 ? 900 : atLineStart ? 650 : 38 + Math.random() * 40
    const t = setTimeout(() => setTicks((n) => n + 1), delay)
    return () => clearTimeout(t)
  }, [ticks])

  // How far each line has progressed, given the total ticks so far.
  const starts = lengths.map((_, i) => lengths.slice(0, i).reduce((a, b) => a + b, 0))
  const progress = lines.map((l, i) => {
    const remaining = ticks - starts[i]
    const showOut = remaining > l.cmd.length
    return {
      typed: Math.max(0, Math.min(remaining, l.cmd.length)),
      showOut,
      active: remaining >= 0 && !showOut,
    }
  })

  return (
    <div className="terminal" aria-label="Things I've shipped">
      <div className="terminal__bar" aria-hidden>
        <span />
        <span />
        <span />
        <em>~/shipped</em>
      </div>
      {/* Screen readers get the full text at once; the animation is visual only. */}
      <ul className="sr-only">
        {lines.map((l) => (
          <li key={l.cmd}>
            {l.cmd}: {l.out}
          </li>
        ))}
      </ul>
      <div className="terminal__body" aria-hidden>
        {lines.map((l, i) => {
          const { typed, showOut, active } = progress[i]
          return (
            <div key={l.cmd} className="terminal__line">
              <p className={typed === 0 && !active ? 'is-pending' : ''}>
                <span className="prompt">$</span> {l.cmd.slice(0, typed)}
                {active && <span className="cursor" />}
              </p>
              <p className={`terminal__out ${showOut ? 'is-shown' : ''}`}>→ {l.out}</p>
            </div>
          )
        })}
        <p className={ticks >= total ? '' : 'is-pending'}>
          <span className="prompt">$</span> <span className="cursor" />
        </p>
      </div>
    </div>
  )
}
