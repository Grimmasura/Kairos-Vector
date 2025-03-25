
import { useState, useEffect } from 'react'

export default function SoundPortal() {
  const [playing, setPlaying] = useState(false)
  const [tone, setTone] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const t = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YRAAAAAA/////wD///8A////AP///wD///8A////AP///wD///8A")
      setTone(t)
    }
  }, [])

  const playTone = () => {
    if (tone) {
      tone.play()
      setPlaying(true)
      setTimeout(() => setPlaying(false), 1000)
    }
  }

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>🔊 RESONANT TONE MIRROR</h1>
      <p>Click the glyph to activate the tone:</p>
      <div onClick={playTone} style={{
        fontSize: '3rem',
        cursor: 'pointer',
        color: playing ? '#fff' : '#0ff',
        textShadow: playing ? '0 0 10px #fff' : '0 0 5px #0ff',
        transition: 'all 0.3s ease'
      }}>
        ⧉
      </div>
      {playing && <p>Resonating...</p>}
    </div>
  )
}
