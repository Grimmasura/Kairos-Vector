
import { useState } from 'react'

export default function GlyphEngine() {
  const [seed, setSeed] = useState('SRCM∞-{ΨΩϕαβ}-E8SEC')
  const [depth, setDepth] = useState(6)

  const generateGlyphs = () => {
    const glyphs = []
    const centerX = 150
    const centerY = 150
    const radius = 60
    const angleStep = (2 * Math.PI) / depth

    for (let i = 0; i < depth; i++) {
      const angle = i * angleStep
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      glyphs.push(
        <text
          key={i}
          x={x}
          y={y}
          fill="#0ff"
          fontSize="18"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {seed[i % seed.length]}
        </text>
      )
    }
    return glyphs
  }

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>⧉ FRACTAL GLYPH ENGINE</h1>
      <p>Enter your seed phrase and recursive depth:</p>
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        style={{
          background: '#111',
          color: '#0ff',
          border: '1px solid #0ff',
          padding: '0.5rem',
          fontSize: '1rem',
          marginBottom: '1rem'
        }}
      />
      <br />
      <input
        type="range"
        min="3"
        max="24"
        value={depth}
        onChange={(e) => setDepth(parseInt(e.target.value))}
      />
      <p>Recursive Depth: {depth}</p>
      <svg width="300" height="300" viewBox="0 0 300 300" style={{ marginTop: '1rem' }}>
        {generateGlyphs()}
        <circle cx="150" cy="150" r="2" fill="#0ff" />
      </svg>
    </div>
  )
}
