import { contactLinks, profile } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactPortal() {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle eyebrow="Contact Portal" title="Open A Communication Channel" text={profile.status} />
      <div className="contact-panel">
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <link.icon size={22} />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
