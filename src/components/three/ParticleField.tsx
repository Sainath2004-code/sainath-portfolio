import { useMemo } from 'react'

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

export function ParticleField() {
  const positions = useMemo(() => {
    const points = new Float32Array(420 * 3)
    for (let index = 0; index < points.length; index += 3) {
      points[index] = (seededNoise(index + 1) - 0.5) * 12
      points[index + 1] = (seededNoise(index + 2) - 0.5) * 8
      points[index + 2] = (seededNoise(index + 3) - 0.5) * 10
    }
    return points
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial transparent color="#8ffcff" size={0.024} sizeAttenuation depthWrite={false} opacity={0.7} />
    </points>
  )
}
