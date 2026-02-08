import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

const HeroModel = () => {
  const groupRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Organic, deep-space rotation
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.2, 0.05)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.05)
      groupRef.current.rotation.z = time * 0.05
    }
  })

  // Diamond-Like Transmission Material for Dark Mode
  const materialProps = {
    backside: true,
    backsideThickness: 5,
    thickness: 2,
    roughness: 0,
    transmission: 1,
    ior: 2.4, // High IOR for Diamond sparkle
    chromaticAberration: 0.5, // High dispersion for rainbows
    anisotropy: 1,
    distortion: 0.8,
    distortionScale: 0.5,
    temporalDistortion: 0.1,
    color: '#ffffff', // Pure white base for maximum light handling
    attenuationColor: '#ff2800', // Deep Ferrari Red internal glow
    attenuationDistance: 1.5,
  }

  return (
    <group ref={groupRef} scale={1.5}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Crystal Core - The "Heart" */}
        <Icosahedron args={[1.5, 0]}>
          <MeshTransmissionMaterial {...materialProps} />
        </Icosahedron>

        {/* Orbiting Satellite Shards - High Sparkle */}
        <Icosahedron args={[0.5, 0]} position={[2.5, 0, 0]}>
          <MeshTransmissionMaterial {...materialProps} attenuationColor="#ffffff" />
        </Icosahedron>
        <Icosahedron args={[0.3, 0]} position={[-2, 1.5, 1]}>
          <MeshTransmissionMaterial {...materialProps} attenuationColor="#ff2800" />
        </Icosahedron>
        <Icosahedron args={[0.4, 0]} position={[0, -2.5, -1]}>
          <MeshTransmissionMaterial {...materialProps} />
        </Icosahedron>

        {/* Wireframe Aura - Thinner and more subtle */}
        <mesh scale={2.5}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial wireframe color="#444" transparent opacity={0.05} />
        </mesh>
      </Float>
    </group>
  )
}

export default HeroModel
