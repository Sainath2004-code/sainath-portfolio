import { contactLinks, profile } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactPortal() {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle eyebrow="Contact Portal" title="Open A Communication Channel" text={profile.status} />
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="status-badge">Ready for outreach</span>
          <h3>Cybersecurity internship and fresher opportunities</h3>
          <p>Email: {profile.email}</p>
        </div>
        {contactLinks.map((link) => (
          link.href ? (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <link.icon size={22} />
              {link.label}
            </a>
          ) : (
            <button className="contact-disabled" key={link.label} type="button" disabled>
              <link.icon size={22} />
              <span>{link.label}</span>
              <small>{link.status}</small>
            </button>
          )
        ))}
        <a href={profile.resumePath} target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </section>
  )
}
