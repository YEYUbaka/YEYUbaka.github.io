import { ContactSection } from './components/ContactSection'
import { FocusSection } from './components/FocusSection'
import { HeroSection } from './components/HeroSection'
import { LearningSection } from './components/LearningSection'
import { ProjectGrid } from './components/ProjectGrid'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { projects } from './data/projects'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FocusSection />
        <ProjectGrid projects={projects} />
        <LearningSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

