import React, { useState } from 'react'

import DisplayName from '../elements/DisplayName'

const Parent = () => {
  const [state, setState] = useState({ firstName: '', lastName: ''})

  const handleChange = (key, event) => {
    setState(s => ({ ...s, [key]: event.target.value }))
    event.persist()
  }

  return (
    <div className="content">
      <h2>Tell us your name</h2>
      <form className="row">
        <input placeholder="First Name" onChange={handleChange.bind(null, 'firstName') } />
        <input placeholder="Last Name" onChange={handleChange.bind(null, 'lastName') }/>
      </form>
      <DisplayName firstName={state.firstName} lastName={state.lastName} />
    </div>
  )
}

export default Parent
