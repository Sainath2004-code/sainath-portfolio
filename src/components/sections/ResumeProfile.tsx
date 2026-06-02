import { certifications, education, experience, participation, technicalSkills } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

const skillBlocks = [
  ['Programming', technicalSkills.programming],
  ['Database', technicalSkills.database],
  ['Web', technicalSkills.web],
  ['Cybersecurity', technicalSkills.cybersecurity],
  ['Operating Systems', technicalSkills.operatingSystems],
  ['Soft Skills', technicalSkills.softSkills],
  ['Languages', technicalSkills.languages],
] as const

export function ResumeProfile() {
  return (
    <section className="section resume-profile-section" id="experience">
      <SectionTitle eyebrow="Resume Source" title="Education, Experience & Credentials" text="Resume-aligned details for Sainath Yoganatham." />
      <div className="resume-profile-grid">
        <GlowCard className="resume-panel experience-panel">
          <span className="status-badge">Experience</span>
          <h3>{experience.company}</h3>
          <p>{experience.role} | {experience.duration}</p>
          <ul>
            {experience.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </GlowCard>

        <GlowCard className="resume-panel">
          <span className="status-badge">Education</span>
          {education.map((item) => (
            <article className="credential-item" key={item.degree}>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <span>{item.duration}</span>
            </article>
          ))}
        </GlowCard>

        <div id="certifications">
          <GlowCard className="resume-panel">
            <span className="status-badge">Certifications</span>
            <ul>
              {certifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </GlowCard>
        </div>

        <GlowCard className="resume-panel">
          <span className="status-badge">Academic & Technical Participation</span>
          <ul>
            {participation.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </GlowCard>

        <GlowCard className="resume-panel skills-panel">
          <span className="status-badge">Technical & Personal Skills</span>
          <div className="resume-skill-blocks">
            {skillBlocks.map(([label, values]) => (
              <div key={label}>
                <h3>{label}</h3>
                <div className="chip-list compact">
                  {values.map((value) => <span key={value}>{value}</span>)}
                </div>
              </div>
            ))}
          </div>
        </GlowCard>
      </div>
    </section>
  )
}
