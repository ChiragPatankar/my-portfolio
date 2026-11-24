import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { useReveal } from './hooks'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#work" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  )
}
