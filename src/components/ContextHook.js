import React, { useState } from "react"

import ContextChild from '../elements/ContextChild'
import { NumberOneContext, NumberTwoContext } from '../utils/context'

const Parent = () => {
  const [valueOne, setValueOne] = useState(1)
  const [valueTwo, setValueTwo] = useState(2)

  return (
    <NumberOneContext.Provider value={valueOne}>
      <NumberTwoContext.Provider value={valueTwo}>
        <h2>Do the maths!</h2>
        <section className={'row'}>
          <button onClick={() => setValueOne(a => a + 1)} className={'button square red'}>
            +
          </button>
          <button onClick={() => setValueTwo(a => a + 1)} className={'button square green'}>
            +
          </button>
        </section>
        <br />
        <div>
          <ContextChild />
        </div>
      </NumberTwoContext.Provider>
    </NumberOneContext.Provider>
  )
}

export default Parent
