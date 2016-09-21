import React, { Component } from 'react'

/**
  * Home view
  */

class Home extends Component {
  /**
    * render
    * @return {ReactElement} Hello screen
    */
  render() {
    let user = null
    if (!user) {
      user = 'World'
    }
    const msg = (
      <h1> Hello {user}! </h1>
    )
    return msg
  }
}

export default Home
