import React, { useState } from 'react'

const ButtonToggle = () => {
  const [active, setActive] = useState(false)

  return (
    <div className="content">
      <h2>Toggle me</h2>
      <div onClick={() => setActive(a => !a)} className={`toggle-container ${active ? 'active' : ''}`}>
        <div className="toggle" />
      </div>
    </div>
  )
}

export default ButtonToggle
