import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Float } from '@react-three/drei'
import * as THREE from 'three'

const ThreeDPhoto = ({ url, position = [0, 0, 0], scale = 1 }) => {
    const meshRef = useRef()
    const texture = useTexture(url)

    useFrame((state) => {
        if (meshRef.current) {
            const { x, y } = state.pointer
            // Smooth tilt effect
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.2, 0.05)
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.2, 0.05)
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <planeGeometry args={[4, 6]} />
                <meshBasicMaterial map={texture} transparent opacity={0.9} side={THREE.DoubleSide} />
            </mesh>
        </Float>
    )
}

export default ThreeDPhoto
