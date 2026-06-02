import { Canvas, useFrame } from '@react-three/fiber'
import { lazy, Suspense, useMemo, useRef } from 'react'
import { GridHelper } from 'three'
import type { Group } from 'three'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const CyberGlobe = lazy(() => import('./CyberGlobe').then((module) => ({ default: module.CyberGlobe })))
const CyberShield = lazy(() => import('./CyberShield').then((module) => ({ default: module.CyberShield })))
const ParticleField = lazy(() => import('./ParticleField').then((module) => ({ default: module.ParticleField })))

function CyberGrid() {
  const grid = useMemo(() => {
    const helper = new GridHelper(12, 28, '#42ff9e', '#0ff3ff')
    const material = Array.isArray(helper.material) ? helper.material[0] : helper.material
    material.transparent = true
    material.opacity = 0.32
    return helper
  }, [])

  return <primitive object={grid} position={[0, -2.2, 0]} />
}

function Rig() {
  const group = useRef<Group>(null)
  const mouse = useMousePosition()
  const reduced = useReducedMotion()

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += reduced ? 0 : delta * 0.05
    state.camera.position.x += (mouse.x * 0.55 - state.camera.position.x) * 0.035
    state.camera.position.y += (-mouse.y * 0.35 + 0.3 - state.camera.position.y) * 0.035
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group}>
      <ParticleField />
      <CyberGlobe />
      <CyberShield />
      <CyberGrid />
    </group>
  )
}

export function CyberScene() {
  return (
    <Canvas className="cyber-canvas" camera={{ position: [0, 0.35, 6], fov: 48 }} dpr={[1, 1.65]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <color attach="background" args={['#02050a']} />
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 3]} color="#0ff3ff" intensity={2.2} />
      <pointLight position={[-3, -1, 2]} color="#7c5cff" intensity={1.5} />
      <Suspense fallback={null}>
        <Rig />
      </Suspense>
    </Canvas>
  )
}
