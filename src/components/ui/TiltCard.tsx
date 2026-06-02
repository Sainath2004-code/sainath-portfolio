import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent, PropsWithChildren } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type TiltCardProps = PropsWithChildren<{
  className?: string
}>

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 220, damping: 22 })

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (reduced) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.article
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.article>
  )
}
