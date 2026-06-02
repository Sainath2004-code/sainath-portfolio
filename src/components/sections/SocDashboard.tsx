import { Activity, BarChart3, Gauge, PieChart } from 'lucide-react'
import { socStats, tools } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { GlowCard } from '../ui/GlowCard'
import { SectionTitle } from '../ui/SectionTitle'

export function SocDashboard() {
  return (
    <section className="section soc-section" id="soc">
      <SectionTitle eyebrow="SOC Simulation" title="Static Learning Dashboard" text="No backend, just polished static telemetry for lab progress and readiness." />
      <div className="stat-grid">
        {socStats.map((stat) => <GlowCard key={stat.label} className="stat-card"><AnimatedCounter value={stat.value} /><span>{stat.label}</span></GlowCard>)}
      </div>
      <div className="dashboard-grid">
        <GlowCard><PieChart /><h3>Alert Severity Distribution</h3><div className="bars"><span style={{ width: '34%' }} /><span style={{ width: '62%' }} /><span style={{ width: '22%' }} /></div></GlowCard>
        <GlowCard><Gauge /><h3>Security Learning Progress</h3><div className="radial">72%</div></GlowCard>
        <GlowCard><Activity /><h3>Resume Tool Practice Status</h3><p>{tools.map((tool) => tool.name).join(', ')}</p></GlowCard>
        <GlowCard><BarChart3 /><h3>Project Readiness</h3><div className="meter"><span style={{ width: '78%' }} /></div></GlowCard>
      </div>
    </section>
  )
}
