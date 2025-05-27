import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/HeroSection'
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-">
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
