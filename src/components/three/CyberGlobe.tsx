import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'

export function CyberGlobe() {
  const rings = useRef<Group>(null)
  const nodes = useMemo(
    () => Array.from({ length: 18 }, (_, index) => {
      const angle = (index / 18) * Math.PI * 2
      const radius = 2.35 + (index % 3) * 0.22
      return [Math.cos(angle) * radius, Math.sin(index * 1.7) * 0.7, Math.sin(angle) * radius] as const
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!rings.current) return
    rings.current.rotation.y -= delta * 0.18
    rings.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.08
  })

  return (
    <group ref={rings}>
      {[0, 1, 2].map((ring) => (
        <mesh key={ring} rotation={[Math.PI / 2 + ring * 0.62, ring * 0.48, 0]}>
          <torusGeometry args={[2.08 + ring * 0.22, 0.012, 16, 144]} />
          <meshStandardMaterial color={ring === 1 ? '#7c5cff' : '#0ff3ff'} emissive={ring === 1 ? '#5a3dff' : '#0ff3ff'} emissiveIntensity={1.4} />
        </mesh>
      ))}
      {nodes.map(([x, y, z], index) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} scale={index % 2 ? 0.09 : 0.12}>
          <boxGeometry />
          <meshStandardMaterial color={index % 3 === 0 ? '#ff4d6d' : '#42ff9e'} emissive={index % 3 === 0 ? '#ff1f50' : '#42ff9e'} emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  )
}
