import React from 'react'

import { Blue } from '../elements/colors'

const Hooks = () => {
  return (
    <div className="content">
      <h2><Blue>What else?</Blue></h2>
      <section>
        <h3>Form Validation</h3>
        <span>Build a custom form validation hook</span>
      </section>
      <section>
        <h3>Request Lifecycles</h3>
        <span>Create a graphQL hook to manage the request lifecycle and resulting data</span>
      </section>
      <section>
        <h3>Redux</h3>
        <span>A hook that returns the store and dispatch property.</span>
      </section>
      <section>
        <h3>Media queries</h3>
        <span>use a custom `useMedia` hook to change a `breakpoint` variable</span>
      </section>
      <section>
        <h3>Portals</h3>
        <span>Abstract the portal boilerplate code away</span>
      </section>
      <section>
        <h3>Blur hook</h3>
        <span>Create a hook that is triggered whenever a user clicks outside the element</span>
      </section>
    </div>
  )
}

export default Hooks
