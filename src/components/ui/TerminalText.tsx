import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type TerminalTextProps = {
  lines: string[]
}

export function TerminalText({ lines }: TerminalTextProps) {
  const [visible, setVisible] = useState(1)
  const reduced = useReducedMotion()
  const visibleCount = reduced ? lines.length : visible

  useEffect(() => {
    if (reduced) return
    const timer = window.setInterval(() => {
      setVisible((current) => Math.min(current + 1, lines.length))
    }, 520)
    return () => window.clearInterval(timer)
  }, [lines.length, reduced])

  return (
    <div className="terminal-lines">
      {lines.slice(0, visibleCount).map((line) => (
        <p key={line}>{line}</p>
      ))}
      <span className="terminal-cursor" />
    </div>
  )
}
