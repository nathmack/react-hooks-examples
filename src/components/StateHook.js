import React, { Component } from 'react'

class ButtonToggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState(state => ({ active: !state.active }))
  }

  render() {
    const { active } = this.state

    return (
      <div className="content">
        <h2>Toggle me</h2>
        <div onClick={this.handleToggle} className={`toggle-container ${active ? 'active' : ''}`}>
          <div className="toggle" />
        </div>
      </div>
    )
  }
}

export default ButtonToggle
