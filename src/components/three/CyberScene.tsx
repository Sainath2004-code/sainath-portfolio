import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { Group, Mesh, Points, ShaderMaterial } from 'three'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const plasmaSphereVert = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPos;

  float waveNoise(vec3 p) {
    return sin(p.x * 3.1 + uTime) * sin(p.y * 2.7 + uTime * 1.3) * sin(p.z * 2.3 + uTime * 0.7);
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    pos += normal * waveNoise(pos * 1.8) * 0.065;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const plasmaSphereFragment = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec3 vNormal;
  varying vec3 vPos;

  void main() {
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.8);
    float bands = sin(vPos.y * 8.0 + uTime * 2.0) * 0.5 + 0.5;
    float scan = sin(vPos.y * 22.0 - uTime * 5.0) * 0.5 + 0.5;
    float energy = mix(bands, scan, 0.3) * fresnel;
    vec3 col = mix(uColor1, uColor2, bands);
    col = mix(col, uColor3, fresnel * 0.6);
    float alpha = energy * 0.7 + fresnel * 0.3;
    gl_FragColor = vec4(col * (0.5 + energy * 0.5), alpha * 0.55);
  }
`

const holoGridVert = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const holoGridFrag = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float gridX = abs(sin(uv.x * 28.0)) < 0.04 ? 1.0 : 0.0;
    float gridZ = abs(sin(uv.y * 28.0)) < 0.04 ? 1.0 : 0.0;
    float grid = max(gridX, gridZ);
    float scanPos = mod(uTime * 0.4, 1.0);
    float scan = smoothstep(0.0, 0.04, 1.0 - abs(uv.y - scanPos)) * 0.8;
    float edge = 1.0 - smoothstep(0.35, 0.5, length(uv - 0.5));
    float alpha = (grid * 0.18 + scan * 0.6) * edge;
    vec3 col = mix(vec3(0.0, 0.95, 1.0), vec3(0.48, 0.36, 1.0), scan);
    gl_FragColor = vec4(col, alpha);
  }
`

const particleVert = /* glsl */ `
  uniform float uTime;
  attribute float aPhase;
  attribute float aSpeed;
  varying float vBright;

  void main() {
    vec3 pos = position;
    pos.y += sin(pos.x * 0.8 + uTime * aSpeed + aPhase) * 0.18;
    vBright = (sin(uTime * aSpeed * 1.3 + aPhase) + 1.0) * 0.5;
    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (180.0 / -mvPos.z) * (0.5 + vBright * 0.5);
    gl_Position = projectionMatrix * mvPos;
  }
`

const particleFrag = /* glsl */ `
  varying float vBright;
  uniform vec3 uColor;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = (1.0 - d * 2.0) * (0.35 + vBright * 0.6);
    gl_FragColor = vec4(uColor * (0.6 + vBright * 0.4), alpha);
  }
`

const shaftVert = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const shaftFrag = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float shaft = pow(max(0.0, 1.0 - d), 3.0);
    float pulse = sin(uTime * 2.0) * 0.15 + 0.85;
    gl_FragColor = vec4(0.0, 0.95, 1.0, shaft * pulse * 0.12);
  }
`

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

function PlasmaSphere() {
  const matRef = useRef<ShaderMaterial>(null)
  const meshRef = useRef<Mesh>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#0ff3ff') },
      uColor2: { value: new THREE.Color('#7c5cff') },
      uColor3: { value: new THREE.Color('#39ff8a') },
    }),
    [],
  )

  useFrame((state, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.12
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.06
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.55, 72, 72]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={plasmaSphereVert}
        fragmentShader={plasmaSphereFragment}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

function HoloGrid() {
  const matRef = useRef<ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta
  })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]}>
      <planeGeometry args={[14, 14, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={holoGridVert}
        fragmentShader={holoGridFrag}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function DNAHelix() {
  const group = useRef<Group>(null)
  const strands = useMemo(() => {
    const pts1: THREE.Vector3[] = []
    const pts2: THREE.Vector3[] = []
    const rungs: Array<{ p1: THREE.Vector3; p2: THREE.Vector3 }> = []
    const count = 60

    for (let index = 0; index < count; index += 1) {
      const t = (index / count) * Math.PI * 6
      const y = (index / count) * 4.8 - 2.4
      const radius = 0.55
      const p1 = new THREE.Vector3(Math.cos(t) * radius, y, Math.sin(t) * radius)
      const p2 = new THREE.Vector3(Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius)
      pts1.push(p1)
      pts2.push(p2)
      if (index % 5 === 0) rungs.push({ p1, p2 })
    }

    return { pts1, pts2, rungs }
  }, [])
  const curve1 = useMemo(() => new THREE.CatmullRomCurve3(strands.pts1), [strands])
  const curve2 = useMemo(() => new THREE.CatmullRomCurve3(strands.pts2), [strands])

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.25
    group.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08
  })

  return (
    <group ref={group} position={[3.2, 0, 0]}>
      <mesh>
        <tubeGeometry args={[curve1, 80, 0.018, 8, false]} />
        <meshStandardMaterial color="#0ff3ff" emissive="#0ff3ff" emissiveIntensity={1.6} transparent opacity={0.85} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curve2, 80, 0.018, 8, false]} />
        <meshStandardMaterial color="#9b6dff" emissive="#7c5cff" emissiveIntensity={1.4} transparent opacity={0.85} />
      </mesh>
      {strands.rungs.map((rung, index) => {
        const direction = rung.p2.clone().sub(rung.p1)
        const length = direction.length()
        const midpoint = rung.p1.clone().add(direction.clone().multiplyScalar(0.5))
        return (
          <mesh key={`${midpoint.y}-${index}`} position={[midpoint.x, midpoint.y, midpoint.z]}>
            <capsuleGeometry args={[0.012, Math.max(length - 0.04, 0.05), 4, 4]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? '#42ff9e' : '#ff4d6d'}
              emissive={index % 2 === 0 ? '#42ff9e' : '#ff4d6d'}
              emissiveIntensity={1.5}
              transparent
              opacity={0.9}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function AdvancedParticles() {
  const pointsRef = useRef<Points>(null)
  const matRef = useRef<ShaderMaterial>(null)
  const count = 720
  const { phases, positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const phases = new Float32Array(count)
    const speeds = new Float32Array(count)

    for (let index = 0; index < count; index += 1) {
      const theta = seededNoise(index + 1) * Math.PI * 2
      const phi = Math.acos(2 * seededNoise(index + 2) - 1)
      const radius = 2.8 + seededNoise(index + 3) * 3.2
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[index * 3 + 1] = radius * Math.cos(phi) * 0.65
      positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      phases[index] = seededNoise(index + 4) * Math.PI * 2
      speeds[index] = 0.3 + seededNoise(index + 5) * 0.7
    }

    return { positions, phases, speeds }
  }, [])
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#0ff3ff') },
    }),
    [],
  )

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={particleVert}
        fragmentShader={particleFrag}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function OrbitRings() {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y -= delta * 0.14
  })

  return (
    <group ref={group}>
      {[0, 1, 2, 3].map((ring) => (
        <mesh key={ring} rotation={[Math.PI / 2 + ring * 0.55, ring * 0.4, ring * 0.2]}>
          <torusGeometry args={[2.05 + ring * 0.28, 0.008, 16, 160]} />
          <meshStandardMaterial
            color={ring % 2 === 0 ? '#0ff3ff' : '#9b6dff'}
            emissive={ring % 2 === 0 ? '#0ff3ff' : '#7c5cff'}
            emissiveIntensity={2.2}
            transparent
            opacity={0.6 - ring * 0.08}
          />
        </mesh>
      ))}
      {Array.from({ length: 24 }, (_, index) => {
        const angle = (index / 24) * Math.PI * 2
        const radius = 2.05 + (index % 4) * 0.28
        const tilt = (index % 4) * 0.55
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * radius, Math.sin(tilt) * Math.sin(angle) * radius * 0.3, Math.sin(angle) * radius]}
            scale={index % 3 === 0 ? 0.07 : 0.045}
          >
            <octahedronGeometry />
            <meshStandardMaterial
              color={index % 2 === 0 ? '#ff4d6d' : '#42ff9e'}
              emissive={index % 2 === 0 ? '#ff1f50' : '#42ff9e'}
              emissiveIntensity={1.8}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function LightShaft({ position }: { position: [number, number, number] }) {
  const matRef = useRef<ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta
  })

  return (
    <mesh position={position}>
      <planeGeometry args={[3, 8]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={shaftVert}
        fragmentShader={shaftFrag}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Rig() {
  const group = useRef<Group>(null)
  const mouse = useMousePosition()
  const reduced = useReducedMotion()

  useFrame((state, delta) => {
    if (!group.current) return
    if (!reduced) group.current.rotation.y += delta * 0.04
    state.camera.position.x += (mouse.x * 0.8 - state.camera.position.x) * 0.028
    state.camera.position.y += (-mouse.y * 0.5 + 0.4 - state.camera.position.y) * 0.028
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group}>
      <AdvancedParticles />
      <PlasmaSphere />
      <OrbitRings />
      <HoloGrid />
      <DNAHelix />
      <LightShaft position={[0, 3, -1]} />
    </group>
  )
}

export function CyberScene() {
  const reduced = useReducedMotion()

  return (
    <Canvas
      className="cyber-canvas"
      camera={{ position: [0, 0.5, 6.5], fov: 46 }}
      dpr={[1, 1.35]}
      frameloop={reduced ? 'demand' : 'always'}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.15
      }}
    >
      <color attach="background" args={['#02050a']} />
      <fog attach="fog" args={['#02050a', 8, 22]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} color="#0ff3ff" intensity={3.5} distance={18} decay={2} />
      <pointLight position={[-4, -1, 3]} color="#7c5cff" intensity={2.5} distance={15} decay={2} />
      <pointLight position={[0, -2, 0]} color="#42ff9e" intensity={1.2} distance={8} decay={2} />
      <spotLight position={[0, 8, 0]} color="#0ff3ff" intensity={2} angle={0.4} penumbra={0.7} decay={2} />
      <Suspense fallback={null}>
        <Rig />
      </Suspense>
    </Canvas>
  )
}
