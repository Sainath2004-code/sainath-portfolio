import { profile } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'
import { TerminalText } from '../ui/TerminalText'

const lines = ['> whoami', '> skills --list', '> projects --show', '> contact --open']

export function AboutTerminal() {
  return (
    <section className="section terminal-section" id="about">
      <SectionTitle eyebrow="Terminal" title="About The Operator" text="A command-line style briefing for Sainath's current learning path." />
      <GlowCard className="terminal-card">
        <div className="terminal-bar"><span /><span /><span /></div>
        <TerminalText lines={lines} />
        <p className="terminal-about">{profile.about}</p>
      </GlowCard>
    </section>
  )
}
