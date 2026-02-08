import { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { shaderMaterial, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import heroImg from '../assets/hero.jpg'

// Custom Liquid Shader Material
const LiquidShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uTexture: new THREE.Texture(),
        uMouse: new THREE.Vector2(0, 0),
        uResolution: new THREE.Vector2(1, 1)
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Liquid distortion based on sine waves
      float wave = sin(uv.y * 10.0 + uTime * 0.5) * 0.005;
      float wave2 = cos(uv.x * 12.0 + uTime * 0.3) * 0.005;
      
      uv.x += wave;
      uv.y += wave2;

      // Mouse interaction (subtle ripple)
      float dist = distance(uv, uMouse);
      uv += (uMouse - uv) * 0.02 * (1.0 - smoothstep(0.0, 0.5, dist));

      vec4 color = texture2D(uTexture, uv);
      
      // Slight chromatic aberration on edges
      float r = texture2D(uTexture, uv + vec2(0.002, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(0.002, 0.0)).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
)

extend({ LiquidShaderMaterial })

const HeroImage = () => {
    const ref = useRef()
    const texture = useTexture(heroImg)

    // Fix aspect ratio
    const aspect = texture.image ? texture.image.width / texture.image.height : 1.5
    const width = 5
    const height = width / aspect

    useFrame((state) => {
        if (ref.current) {
            ref.current.uTime = state.clock.getElapsedTime()
            // Map mouse -1 to 1 to UV 0 to 1 approximate
            ref.current.uMouse = new THREE.Vector2(
                (state.pointer.x + 1) / 2,
                (state.pointer.y + 1) / 2
            )
        }
    })

    return (
        <mesh position={[-2, 0, -1]} scale={1.2}>
            <planeGeometry args={[width, height, 32, 32]} />
            <liquidShaderMaterial ref={ref} uTexture={texture} transparent />
        </mesh>
    )
}

export default HeroImage
