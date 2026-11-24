import { useEffect, useRef, useState } from 'react'

export type Theme = 'dark' | 'light'

function readStoredTheme(): Theme | null {
  try {
    const t = localStorage.getItem('theme')
    return t === 'dark' || t === 'light' ? t : null
  } catch {
    return null
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => readStoredTheme() ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable (private mode); theme still applies for this visit
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))] as const
}

/** Returns the id of the section currently in view. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Adds `is-visible` to `.reveal` elements as they scroll into view.
 * Elements that enter together are staggered so lists cascade in.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        let i = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.style.transitionDelay = `${Math.min(i++, 6) * 70}ms`
          el.classList.add('is-visible')
          observer.unobserve(el)
          // Drop the delay afterwards so hover transitions stay snappy.
          setTimeout(() => (el.style.transitionDelay = ''), 1200)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => observer.observe(el))

    // Pick up elements mounted later, e.g. cards shown after changing a filter.
    const mutations = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('.reveal:not(.is-visible)')) observer.observe(node)
          node.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
        })
      }
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}

/** Scales the referenced element's X axis with page scroll progress. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}

/**
 * Counts a metric like "435×" or "0.910" up from zero once it scrolls into view.
 * Values without a leading number are returned unchanged.
 */
export function useCountUp(value: string) {
  const ref = useRef<HTMLElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([\d,]*\.?\d+)(.*)$/)
    if (!match || !el || prefersReducedMotion()) return
    const target = parseFloat(match[1].replace(/,/g, ''))
    const decimals = match[1].split('.')[1]?.length ?? 0
    const format = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + match[2]
    setDisplay(format(0))

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1400, 1)
        setDisplay(format(target * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return [ref, display] as const
}
