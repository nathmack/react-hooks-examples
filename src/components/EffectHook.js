import React, { Component } from 'react'

class EffectHook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handlePress = this.handlePress.bind(this)
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handlePress)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handlePress)
  }

  handlePress(event) {
    if (event.key === 'a') {
      this.setState(state => ({ count: state.count + 1 }))
    }
  }

  render() {
    const { count } = this.state

    return (
      <div className="content">
        <h2>Press A</h2>
        <p>You pressed A <span style={{ color: '#e67e22' }}>{count}</span> times</p>
      </div>
    )
  }
}

export default EffectHook
