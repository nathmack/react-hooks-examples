import React, { useContext } from "react"

import { NumberOneContext, NumberTwoContext } from '../utils/context'
import { Red, Green, Yellow } from './colors'

const ContextChild = () => {
  const valueOne = useContext(NumberOneContext)
  const valueTwo = useContext(NumberTwoContext)

  return (
    <div>
      <Red>{valueOne}</Red> + <Green>{valueTwo}</Green> = <Yellow>{valueOne + valueTwo}</Yellow>
    </div>
  )
}

export default ContextChild
