import React, { useState, useEffect } from 'react'

const EffectHook = ({ defaultCount }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.addEventListener('keypress', handlePress)
    return () => document.removeEventListener('keypress', handlePress)
  }, [])

  const handlePress = event => {
    if (event.key === 'a') {
      setCount(c => c + 1)
    }
  }

  return (
    <div className="content">
      <h2>Press A</h2>
      <p>You pressed A <span style={{ color: '#e67e22' }}>{count}</span> times</p>
    </div>
  )
}

export default EffectHook
