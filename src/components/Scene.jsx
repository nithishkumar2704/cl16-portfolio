import { ContactShadows, Environment, Stars } from '@react-three/drei'
import HeroModel from './HeroModel'
import HeroImage from './HeroImage'

const Scene = () => {
    return (
        <group>
            {/* The Restored Hero Image with WebGL Liquid Effect */}
            {/* REMOVED FOR PURE 3D AESTHETIC */}

            {/* The Refractive Crystal Core - REMOVED AS REQUESTED */}
            {/* <HeroModel /> */}

            {/* Clean, High-End Lighting */}
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />

            {/* Subtle Depth */}
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

            <ContactShadows
                opacity={0.4}
                scale={20}
                blur={2}
                far={10}
                resolution={512}
                color="#000000"
            />
        </group>
    )
}

export default Scene
