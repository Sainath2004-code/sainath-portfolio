import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const update = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('pointermove', update)
    return () => window.removeEventListener('pointermove', update)
  }, [])

  return position
}
