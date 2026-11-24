import type { ReactNode } from 'react'

interface Props {
  id: string
  index: string
  title: string
  lede?: string
  children: ReactNode
}

export function Section({ id, index, title, lede, children }: Props) {
  return (
    <section id={id} className="section container">
      <header className="section__head reveal">
        <span className="section__index">{index}</span>
        <h2>{title}</h2>
        {lede && <p className="section__lede">{lede}</p>}
      </header>
      {children}
    </section>
  )
}
