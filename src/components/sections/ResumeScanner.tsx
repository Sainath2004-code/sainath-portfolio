import { Download, FileCheck, ScanLine } from 'lucide-react'
import { certifications, education, focusAreas, profile, projects } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

export function ResumeScanner() {
  return (
    <section className="section resume-section" id="resume">
      <SectionTitle eyebrow="Resume Scanner" title="Cyber Profile Scan Result" text="The resume link points to /resume.pdf and remains harmless if the file is not present yet." />
      <GlowCard className="scanner-card">
        <ScanLine size={36} />
        <div className="scanner-beam" />
        <div className="scanner-content">
          <span className="status-badge">Resume status: Ready</span>
          <h3>Internship Profile Package</h3>
          <div className="scanner-stats">
            <p><FileCheck size={16} /> Skills detected: {focusAreas.length}</p>
            <p><FileCheck size={16} /> Projects detected: {projects.length}</p>
            <p><FileCheck size={16} /> Education entries: {education.length}</p>
            <p><FileCheck size={16} /> Certifications: {certifications.length}</p>
          </div>
          <a className="primary-btn" href={profile.resumePath} download><Download size={18} />Download Resume</a>
        </div>
      </GlowCard>
    </section>
  )
}
