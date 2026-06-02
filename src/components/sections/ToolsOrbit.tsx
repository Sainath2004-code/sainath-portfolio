import { learningLabTools, tools } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import type { CSSProperties } from 'react'

type LearningLabTool = (typeof learningLabTools)[number]

function LearningToolCard({ tool }: { tool: LearningLabTool }) {
  return (
    <article className="learning-tool">
      <tool.icon size={20} />
      <strong>{tool.name}</strong>
      <span>{tool.category}</span>
      <p>{tool.usedFor}</p>
    </article>
  )
}

export function ToolsOrbit() {
  return (
    <section className="section tools-section" id="tools">
      <SectionTitle eyebrow="Tools Arsenal" title="Resume Tool Orbit" text="Tools listed in the resume, arranged like a lightweight tactical orbit." />
      <div className="orbit-stage">
        <div className="orbit-core">RESUME<br />TOOLS</div>
        {tools.map((tool, index) => (
          <article className="tool-module" key={tool.name} style={{ '--i': index, '--total': tools.length } as CSSProperties}>
            <tool.icon size={22} />
            <strong>{tool.name}</strong>
            <span>{tool.category}</span>
            <p>{tool.usedFor}</p>
          </article>
        ))}
      </div>
      <div className="learning-tools">
        <h3>Learning Lab Tools</h3>
        <div className="learning-tools-grid">
          {learningLabTools.map((tool) => (
            <LearningToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
