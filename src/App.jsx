import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'

import heroImg from './assets/hero_bg_v2.jpeg'

function App() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* 3D Scene Background - Fixed */}
      <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Background Image Texture - "Sick" Low Opacity Layer */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center', // Fix: Focus on face
        opacity: 0.35, // Increased opacity for "attractive" look
        pointerEvents: 'none',
        filter: 'contrast(1.1)' // Enhanced original color
      }} />

      {/* Scrollable UI Overlay */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <UI />
      </div>

      <div style={{ position: 'fixed', bottom: 10, right: 10, opacity: 0.3, color: '#fff', fontSize: '10px', zIndex: 1000, fontFamily: 'var(--font-mono)' }}>
        SCUDERIA FERRARI // SCROLL TO EXPLORE
      </div>
    </main>
  )
}

export default App
