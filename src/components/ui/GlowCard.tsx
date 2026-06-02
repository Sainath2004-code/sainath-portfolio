import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type GlowCardProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.article
      className={`glow-card ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.article>
  )
}
