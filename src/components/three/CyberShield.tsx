import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

export function CyberShield() {
  const core = useRef<Group>(null)

  useFrame((state, delta) => {
    if (!core.current) return
    core.current.rotation.y += delta * 0.35
    core.current.rotation.z += delta * 0.08
    core.current.position.y = Math.sin(state.clock.elapsedTime * 1.6) * 0.12
  })

  return (
    <group ref={core}>
      <mesh>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshStandardMaterial color="#0ff3ff" emissive="#0a8ea0" emissiveIntensity={0.8} metalness={0.7} roughness={0.18} wireframe />
      </mesh>
      <mesh scale={[0.78, 1.08, 0.78]}>
        <octahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color="#42ff9e" emissive="#19a868" emissiveIntensity={0.7} transparent opacity={0.32} metalness={0.4} roughness={0.25} />
      </mesh>
    </group>
  )
}
