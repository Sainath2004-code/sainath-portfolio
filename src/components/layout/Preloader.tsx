import { motion } from 'framer-motion'

const loadingLines = ['Initializing Cyber Profile...', 'Loading Security Modules...', 'Rendering 3D Command Center...']

export function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 2.25, duration: 0.65 }}
      aria-hidden="true"
    >
      <div className="preloader-core">
        <div className="loader-ring" />
        <div className="loader-copy">
          {loadingLines.map((line, index) => <p key={line} style={{ animationDelay: `${index * 0.32}s` }}>{line}</p>)}
        </div>
        <div className="progress-track"><span /></div>
      </div>
    </motion.div>
  )
}
