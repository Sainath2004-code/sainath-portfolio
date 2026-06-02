import { motion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow: string
  title: string
  text?: string
}

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  )
}
