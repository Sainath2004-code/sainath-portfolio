import { evidenceSteps } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function EvidenceBoard() {
  return (
    <section className="section evidence-section" id="forensics">
      <SectionTitle eyebrow="Digital Forensics" title="Evidence Board Workflow" text="A premium investigation layout for evidence handling and reporting practice." />
      <div className="evidence-board">
        <svg className="evidence-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M12 20 C30 18 34 58 50 50 S72 28 88 35 M18 78 C34 52 66 88 82 64 M20 20 L82 64" />
        </svg>
        {evidenceSteps.map((step, index) => <article key={step} className={`evidence-tile evidence-tile-${index}`}><span>0{index + 1}</span><strong>{step}</strong></article>)}
      </div>
    </section>
  )
}
