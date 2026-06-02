import { skillGroups } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'
import { TiltCard } from '../ui/TiltCard'

export function SkillMatrix() {
  return (
    <section className="section" id="skills">
      <SectionTitle eyebrow="Skill Matrix" title="Practical Security Capability Map" text="Grouped skills with current learning depth and project usage." />
      <div className="skill-grid">
        {skillGroups.map((group, groupIndex) => (
          <GlowCard key={group.group} delay={groupIndex * 0.04} className="skill-group">
            <group.icon size={24} />
            <h3>{group.group}</h3>
            {group.skills.map((skill) => (
              <TiltCard key={skill.name} className="skill-card">
                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.level}</span>
                </div>
                <div className="meter"><span style={{ width: `${skill.progress}%` }} /></div>
              </TiltCard>
            ))}
          </GlowCard>
        ))}
      </div>
    </section>
  )
}
