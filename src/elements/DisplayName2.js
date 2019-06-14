import React, { useState, useEffect } from 'react'

import { hashCode } from '../utils/hash'
import { Orange, Green  } from '../elements/colors'

const DisplayName = ({ firstName, lastName }) => {
  const [displayName, setDisplayName] = useState('')
  const [hash, setHash] = useState('')

  useEffect(() => {
    const displayName = `${firstName} ${lastName}`.trim()

    setDisplayName(displayName)
    setHash(hashCode(displayName))
  }, [firstName, lastName])

  return (
    <div className="content">
      <p>
        Your name is: <Orange>{displayName}</Orange><br />
        With a cool hash of: <Green>{hash}</Green>
       </p>
    </div>
  )
}

export default DisplayName
