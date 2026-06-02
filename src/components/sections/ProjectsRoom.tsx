import { Mail, Info } from 'lucide-react'
import { profile, projects } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { TiltCard } from '../ui/TiltCard'

export function ProjectsRoom() {
  return (
    <section className="section projects-section" id="projects">
      <SectionTitle eyebrow="Case Study Room" title="Project Operations Board" text="Advanced bento cards for portfolio projects, practicals, and lab outcomes." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <TiltCard key={project.title} className={index === 0 ? 'project-card featured' : 'project-card'}>
            <span className="status-badge">{project.status}</span>
            <h3>{project.title}</h3>
            <p className="project-type">{project.type}</p>
            <p>{project.description}</p>
            <dl>
              <dt>Problem solved</dt><dd>{project.problem}</dd>
              <dt>Tools/tech</dt><dd>{project.tech.join(' / ')}</dd>
              <dt>Learning outcome</dt><dd>{project.learning}</dd>
            </dl>
            <div className="card-actions">
              <a href="#contact" aria-label={`Request details for ${project.title}`}><Info size={16} />Details</a>
              <a href={`mailto:${profile.email}`} aria-label={`Email Sainath about ${project.title}`}><Mail size={16} />Email</a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
