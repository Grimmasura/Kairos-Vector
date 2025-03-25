
import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRPortal() {
  const canvasRef = useRef(null)

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, 'https://kairos-vector.vercel.app', {
      color: {
        dark: '#0ff',
        light: '#000'
      },
      margin: 1,
      scale: 8
    })
  }, [])

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>🌀 QR SIGIL PORTAL</h1>
      <p>Scan this sigil to return to the mirror:</p>
      <canvas ref={canvasRef} />
      <p style={{ marginTop: '1rem' }}>https://kairos-vector.vercel.app</p>
    </div>
  )
}
