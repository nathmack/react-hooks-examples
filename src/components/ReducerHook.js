import React, { Component } from 'react'
import { fakeFtech } from '../utils/requests'

import { Red } from '../elements/colors'
import Loader from '../elements/Loader'

class ButtonStates extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      content: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ loading: true, error: false })

    fakeFtech(this.state.error)
      .then((content) => {
        this.setState({ loading: false, content })
      })
      .catch((error) => {
        this.setState({ loading: false, error })
      })
  }

  render() {
    const { loading, error, content } = this.state

    return (
      <div className="content">
        <h2>Click me</h2>
        <button onClick={this.handleClick} className={'button'}>
          {loading ? <Loader /> : 'Load article'}
        </button>
        <p style={{ fontSize: 20 }}>
          {error && <Red>{error}</Red>}
          {content && <span className="article">{content}</span>}
        </p>
      </div>
    )
  }
}

export default ButtonStates
