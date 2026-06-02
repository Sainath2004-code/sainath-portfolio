import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type AnimatedCounterProps = {
  value: number
  suffix?: string
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()
  const shownValue = reduced ? value : display

  useEffect(() => {
    if (reduced) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let frame = 0
      const total = 54
      const tick = () => {
        frame += 1
        setDisplay(Math.round(value * (1 - Math.pow(1 - frame / total, 3))))
        if (frame < total) requestAnimationFrame(tick)
      }
      tick()
      observer.disconnect()
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reduced, value])

  return <span ref={ref}>{shownValue.toLocaleString()}{suffix}</span>
}
