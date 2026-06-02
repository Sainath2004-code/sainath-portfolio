import Lenis from 'lenis'
import { lazy, Suspense, useEffect } from 'react'
import { BackToTop } from './components/layout/BackToTop'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Preloader } from './components/layout/Preloader'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { AboutTerminal } from './components/sections/AboutTerminal'
import { ContactPortal } from './components/sections/ContactPortal'
import { EvidenceBoard } from './components/sections/EvidenceBoard'
import { IdentityCard } from './components/sections/IdentityCard'
import { LabRecords } from './components/sections/LabRecords'
import { ProjectsRoom } from './components/sections/ProjectsRoom'
import { ResumeScanner } from './components/sections/ResumeScanner'
import { SkillMatrix } from './components/sections/SkillMatrix'
import { SocDashboard } from './components/sections/SocDashboard'
import { Timeline } from './components/sections/Timeline'
import { ToolsOrbit } from './components/sections/ToolsOrbit'
import './styles/global.css'

const Hero = lazy(() => import('./components/sections/Hero').then((module) => ({ default: module.Hero })))

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<section className="hero-fallback">Rendering 3D Command Center...</section>}>
        <Hero />
      </Suspense>
      <main>
        <IdentityCard />
        <AboutTerminal />
        <SkillMatrix />
        <ToolsOrbit />
        <ProjectsRoom />
        <EvidenceBoard />
        <SocDashboard />
        <LabRecords />
        <Timeline />
        <ResumeScanner />
        <ContactPortal />
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
