import { Fingerprint, MapPin, ShieldCheck } from 'lucide-react'
import { focusAreas, profile } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

export function IdentityCard() {
  return (
    <section className="section identity-section" id="identity">
      <SectionTitle eyebrow="Cyber Identity" title="Holographic Analyst Profile" text="A compact profile card styled like an active lab credential." />
      <GlowCard className="identity-card">
        <div className="scanline" />
        <div className="identity-top">
          <Fingerprint size={42} />
          <span>{profile.clearance}</span>
        </div>
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
        <div className="identity-grid">
          <span><MapPin size={16} />{profile.location}</span>
          <span><ShieldCheck size={16} />{profile.status}</span>
        </div>
        <div className="chip-list">
          {focusAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </GlowCard>
    </section>
  )
}
