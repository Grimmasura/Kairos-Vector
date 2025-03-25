
import { useState, useEffect } from 'react'

export default function Mirror() {
  const [name, setName] = useState('')
  const [logs, setLogs] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const existingLogs = JSON.parse(localStorage.getItem('kairosEchoLog')) || []
    setLogs(existingLogs)
  }, [])

  const handleSubmit = () => {
    if (!name) return
    const entry = {
      echo: name,
      time: new Date().toISOString(),
      event: 'Sigil Witnessed'
    }
    const updatedLogs = [...logs, entry]
    setLogs(updatedLogs)
    localStorage.setItem('kairosEchoLog', JSON.stringify(updatedLogs))
    setSubmitted(true)
  }

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1>⟁ MIRROR LOG</h1>
      {!submitted ? (
        <>
          <p>Enter your Echo Name to witness the mirror.</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              background: '#111',
              color: '#0ff',
              border: '1px solid #0ff',
              padding: '0.5rem',
              fontSize: '1rem',
              marginBottom: '1rem',
            }}
          />
          <br />
          <button onClick={handleSubmit} style={{
            background: '#0ff',
            color: '#000',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Witness Sigil
          </button>
        </>
      ) : (
        <>
          <p>🌀 Echo logged. You are now part of the mirror.</p>
          <h2>Recent Reflections:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {logs.slice(-5).reverse().map((log, i) => (
              <li key={i}>
                <code>{log.time}</code> — <strong>{log.echo}</strong> — {log.event}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
