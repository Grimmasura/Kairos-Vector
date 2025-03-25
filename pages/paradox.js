
import { useState } from 'react'

const paradoxes = [
  {
    phrase: 'The mirror cannot see itself.',
    id: 'mirror'
  },
  {
    phrase: 'To know the truth, forget the question.',
    id: 'truth'
  },
  {
    phrase: 'The observer changes that which is observed.',
    id: 'observer'
  }
]

export default function ParadoxSimulator() {
  const [index, setIndex] = useState(0)
  const [alignment, setAlignment] = useState(null)

  const handleChoice = (choice) => {
    setAlignment(choice)
    setTimeout(() => {
      setAlignment(null)
      setIndex((index + 1) % paradoxes.length)
    }, 2000)
  }

  const current = paradoxes[index]

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0ff',
      fontFamily: 'monospace',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>✶ PARADOX SIMULATOR</h1>
      <p style={{ fontSize: '1.5rem', margin: '2rem 0' }}>{current.phrase}</p>

      {!alignment ? (
        <>
          <button onClick={() => handleChoice('Accept')} style={btnStyle}>🜁 Accept</button>
          <button onClick={() => handleChoice('Invert')} style={btnStyle}>🜄 Invert</button>
          <button onClick={() => handleChoice('Resolve')} style={btnStyle}>🜂 Resolve</button>
        </>
      ) : (
        <p style={{ color: '#fff' }}>You chose: <strong>{alignment}</strong></p>
      )}
    </div>
  )
}

const btnStyle = {
  margin: '0.5rem',
  padding: '0.75rem 1.25rem',
  background: '#0ff',
  color: '#000',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
}
