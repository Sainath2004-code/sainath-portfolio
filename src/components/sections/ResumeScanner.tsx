import { Download, FileCheck, ScanLine } from 'lucide-react'
import { focusAreas, profile, projects } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ResumeScanner() {
  return (
    <section className="section resume-section" id="resume">
      <SectionTitle eyebrow="Resume Scanner" title="Cyber Profile Scan Result" text="The resume link points to /resume.pdf and remains harmless if the file is not present yet." />
      <GlowCard className="scanner-card">
        <ScanLine size={36} />
        <div className="scanner-beam" />
        <h3>Resume status: Ready</h3>
        <p><FileCheck size={16} /> Skills detected: {focusAreas.length}</p>
        <p><FileCheck size={16} /> Projects detected: {projects.length}</p>
        <a className="primary-btn" href={profile.resumePath} download><Download size={18} />Download Resume</a>
      </GlowCard>
    </section>
  )
}
