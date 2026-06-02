import { ExternalLink, Info } from 'lucide-react'
import { projects } from '../../data/portfolio'
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
            <p>{project.description}</p>
            <dl>
              <dt>Problem solved</dt><dd>{project.problem}</dd>
              <dt>Tools/tech</dt><dd>{project.tech.join(' / ')}</dd>
              <dt>Learning outcome</dt><dd>{project.learning}</dd>
            </dl>
            <div className="card-actions">
              <a href="#contact"><Info size={16} />Details</a>
              <a href="https://github.com/your-username" target="_blank" rel="noreferrer"><ExternalLink size={16} />GitHub</a>
              <a href="#projects"><ExternalLink size={16} />Demo</a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
