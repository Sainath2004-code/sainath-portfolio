import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let frame = 0
    let nextPosition = { x: 0, y: 0 }

    const update = (event: MouseEvent) => {
      nextPosition = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      }
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setPosition(nextPosition)
      })
    }

    window.addEventListener('pointermove', update)
    return () => {
      window.removeEventListener('pointermove', update)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return position
}
