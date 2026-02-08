import { EffectComposer, Glitch, Bloom, Noise, ChromaticAberration, Scanline } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction } from 'postprocessing'

const Effects = () => {
    return (
        <EffectComposer disableNormalPass>
            <Glitch
                delay={[1.5, 3.5]} // min and max delay between glitches
                duration={[0.6, 1.0]} // min and max duration of a glitch
                strength={[0.3, 1.0]} // min and max strength
                mode={GlitchMode.SPORADIC} // glitch mode
                active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            />
            <Bloom
                luminanceThreshold={0.2}
                mipmapBlur
                intensity={1.5}
                radius={0.6}
                levels={8}
            />
            <ChromaticAberration
                blendFunction={BlendFunction.NORMAL} // blend mode
                offset={[0.002, 0.002]} // color offset
            />
            <Noise
                premultiply
                blendFunction={BlendFunction.OVERLAY}
                opacity={0.5}
            />
            <Scanline
                blendFunction={BlendFunction.OVERLAY}
                density={1.25}
                opacity={0.1}
            />
        </EffectComposer>
    )
}

export default Effects
