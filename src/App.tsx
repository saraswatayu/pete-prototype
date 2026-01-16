import { useControls, folder, button, Leva } from 'leva'
import { Scene } from './components/Scene'
import { TopCards } from './components/TopCards'
import { StackedFooter } from './components/StackedFooter'

function App() {
  const [settings, set] = useControls(() => ({
    Ball: folder({
      color: '#f5f5f5',
      metalness: { value: 0, min: 0, max: 1, step: 0.01 },
      roughness: { value: 1, min: 0, max: 1, step: 0.01 },
      envMapIntensity: { value: 0.3, min: 0, max: 2, step: 0.1 },
      radius: { value: 0.35, min: 0.1, max: 0.8, step: 0.05 },
    }),
    Physics: folder({
      mass: { value: 0.8, min: 0.1, max: 5, step: 0.1 },
      restitution: { value: 0.2, min: 0, max: 1, step: 0.05, label: 'bounce' },
      friction: { value: 0.3, min: 0, max: 1, step: 0.05 },
      linearDamping: { value: 0.8, min: 0, max: 2, step: 0.05 },
      gravity: { value: -60, min: -100, max: -10, step: 5 },
      springStrength: { value: 800, min: 100, max: 2000, step: 50 },
    }),
    String: folder({
      stringLength: { value: 2.5, min: 1, max: 5, step: 0.1, label: 'length' },
      stringThickness: { value: 0.018, min: 0.005, max: 0.05, step: 0.002, label: 'thickness' },
      stringColor: { value: '#e8e4dc', label: 'color' },
      ropeDamping: { value: 0.92, min: 0.5, max: 0.99, step: 0.01, label: 'stiffness' },
    }),
    Presets: folder({
      'Cotton Balls': button(() => set({
        color: '#f5f5f5',
        metalness: 0,
        roughness: 1,
        envMapIntensity: 0.3,
        mass: 0.8,
        restitution: 0.2,
        linearDamping: 0.8,
        stringColor: '#e8e4dc',
      })),
      'Chrome Spheres': button(() => set({
        color: '#c0c0c0',
        metalness: 0.95,
        roughness: 0.05,
        envMapIntensity: 1.5,
        mass: 2,
        restitution: 0.3,
        linearDamping: 0.6,
        stringColor: '#333333',
      })),
      'Rubber Balls': button(() => set({
        color: '#e63946',
        metalness: 0,
        roughness: 0.8,
        envMapIntensity: 0.2,
        mass: 1.2,
        restitution: 0.5,
        linearDamping: 0.5,
        stringColor: '#1a1a1a',
      })),
      'Boxing Gloves': button(() => set({
        color: '#8b0000',
        metalness: 0.1,
        roughness: 0.6,
        envMapIntensity: 0.4,
        mass: 3,
        restitution: 0.1,
        linearDamping: 1.0,
        stringColor: '#d4a574',
      })),
    }),
  }))

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      <Leva collapsed={true} />

      {/* PETE watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span
          className="font-black tracking-tighter text-gray-200/40"
          style={{ fontSize: '25vw', letterSpacing: '-0.05em' }}
        >
          PETE
        </span>
      </div>

      {/* Top cards */}
      <div className="relative z-10 overflow-visible">
        <TopCards />
      </div>

      {/* Middle section with side text and 3D scene */}
      <div className="flex-1 relative flex">
        {/* Left side text */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="font-mono text-[11px] text-gray-500 leading-relaxed tracking-wide text-left whitespace-pre-line">
            {`PETER RODRIGUEZ.
3RD-GEN NUYORICAN DESIGNER.
PROUDLY BRONX-BRED.
NOW PLAYING IN BROOKLYN.`}
          </p>
        </div>

        {/* 3D Scene */}
        <div className="flex-1">
          <Scene settings={settings} />
        </div>

        {/* Right side text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="font-mono text-[11px] text-gray-500 leading-relaxed tracking-wide text-right whitespace-pre-line">
            {`CRAFTING WORLD-CLASS
SITES & APPS.
FROM MY SCREEN TO YOURS.
WITH HEART, SINCE 1989.`}
          </p>
        </div>
      </div>

      {/* Stacked footer */}
      <div className="relative z-10 overflow-visible">
        <StackedFooter />
      </div>
    </div>
  )
}

export default App
