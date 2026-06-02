import { Download, FlaskConical, FolderKanban } from 'lucide-react'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { badges, profile } from '../../data/portfolio'

const CyberScene = lazy(() => import('../three/CyberScene').then((module) => ({ default: module.CyberScene })))

const dataPanels = [
  ['SIGMA', 'LOG STREAM: CLEAN', 'panel-alpha'],
  ['FORENSICS', 'HASH MATCH: TRUE', 'panel-beta'],
  ['SOC', 'ALERT QUEUE: STUDY', 'panel-gamma'],
] as const

export function Hero() {
  return (
    <section className="hero-section" id="hero">
      <Suspense fallback={<div className="scene-loading">Rendering 3D Command Center...</div>}>
        <CyberScene />
      </Suspense>
      <div className="scene-panels-overlay" aria-hidden="true">
        {dataPanels.map(([label, value, className]) => (
          <div className={`scene-panel ${className}`} key={label}>
            <strong>{label}</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <div className="hero-overlay">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 2.35 }}>
          <p className="kicker">Interactive Cyber Command Center</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{profile.subtitle}</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects"><FolderKanban size={18} />Explore Projects</a>
            <a className="ghost-btn" href="#labs"><FlaskConical size={18} />View Cyber Labs</a>
            <a className="ghost-btn" href={profile.resumePath} download><Download size={18} />Download Resume</a>
          </div>
          <div className="hero-badges">
            {badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
