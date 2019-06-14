import React, { Component } from 'react'

import { hashCode } from '../utils/hash'
import { Orange, Green  } from '../elements/colors'

class DisplayName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      hash: '',
    }
  }

  componentWillReceiveProps(nexpProps) {
    const { firstName, lastName } = this.props

    console.log(nexpProps)
    if (firstName !== nexpProps.firstName || lastName !== nexpProps.lastName) {
      const displayName = `${nexpProps.firstName} ${nexpProps.lastName}`.trim()

      this.setState({
        displayName,
        hash: hashCode(displayName),
      })
    }
  }

  render() {
    const { displayName, hash } = this.state

    return (
      <div className="content">
        <p>
          Your name is: <Orange>{displayName}</Orange><br />
          With a cool hash of: <Green>{hash}</Green>
         </p>
      </div>
    )
  }
}

export default DisplayName
