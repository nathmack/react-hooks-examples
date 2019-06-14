import React, { useReducer } from 'react'
import { fakeFtech } from '../utils/requests'

import { Red } from '../elements/colors'
import Loader from '../elements/Loader'

function reducer(state, action) {
  switch (action.type) {
    default:
    case 'SUCCESS':
      return { state: 'ready', content: action.content }
    case 'ERROR':
      return { state: 'error', error: action.error }
    case 'SUBMIT':
      return { state: 'loading' }
  }
}

const ButtonStates = () => {
  const [{ state, content, error }, dispatch] = useReducer(reducer, {})

  const handleClick = () => {
    dispatch({ type: 'SUBMIT' })

    fakeFtech(error)
      .then((content) => {
        dispatch({ type: 'SUCCESS', content })
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', error })
      })
  }

  return (
    <div className="content">
      <h2>Click me</h2>
      <button onClick={handleClick} className={'button'}>
        {state === 'loading' ? <Loader /> : 'Load article'}
      </button>
      <p style={{ fontSize: 20 }}>
        {state === 'error' && <Red>{error}</Red>}
        {state === 'ready' && <span className="article">{content}</span>}
      </p>
    </div>
  )
}

export default ButtonStates
