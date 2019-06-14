import React from "react"

import { NumberOneContext, NumberTwoContext } from '../utils/context'
import { Red, Green, Yellow } from './colors'

const ContextChild = () => {
  return (
    <NumberOneContext.Consumer>
      {valueOne =>
        <NumberTwoContext.Consumer>
          {valueTwo => (
            <div>
              <Red>{valueOne}</Red> + <Green>{valueTwo}</Green> =
              <Yellow>{valueOne + valueTwo}</Yellow>
            </div>
           )}
        </NumberTwoContext.Consumer>
      }
    </NumberOneContext.Consumer>
  )
}

export default ContextChild
