import { tools } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import type { CSSProperties } from 'react'

export function ToolsOrbit() {
  return (
    <section className="section tools-section" id="tools">
      <SectionTitle eyebrow="Tools Arsenal" title="Orbiting Cyber Modules" text="Security and forensics tools arranged like a lightweight tactical orbit." />
      <div className="orbit-stage">
        <div className="orbit-core">LAB<br />ARSENAL</div>
        {tools.map((tool, index) => (
          <article className="tool-module" key={tool.name} style={{ '--i': index, '--total': tools.length } as CSSProperties}>
            <tool.icon size={22} />
            <strong>{tool.name}</strong>
            <span>{tool.category}</span>
            <p>{tool.usedFor}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
