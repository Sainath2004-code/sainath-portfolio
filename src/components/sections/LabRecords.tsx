import { labRecords } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

export function LabRecords() {
  return (
    <section className="section" id="labs">
      <SectionTitle eyebrow="Cyber Lab Records" title="Practical Documentation Cards" text="Professional records for security and forensic practice work." />
      <div className="lab-grid">
        {labRecords.map((record) => (
          <GlowCard key={record.title} className="lab-card">
            <h3>{record.title}</h3>
            <p><strong>Aim:</strong> {record.aim}</p>
            <p><strong>Tool used:</strong> {record.tool}</p>
            <p><strong>What I learned:</strong> {record.learned}</p>
            <p><strong>Result:</strong> {record.result}</p>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}
