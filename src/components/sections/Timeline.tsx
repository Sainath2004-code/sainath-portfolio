import { journey } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function Timeline() {
  return (
    <section className="section timeline-section" id="journey">
      <SectionTitle eyebrow="Learning Journey" title="Roadmap To Fresher Readiness" />
      <ol className="timeline">
        {journey.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}
      </ol>
    </section>
  )
}
