import React, { Component } from 'react'
import * as firebase from 'firebase'

/**
  * Logout view with signOut action from Firebase
  */

class Logout extends Component {
  componentDidMount = () => {
    /**
      * handle signOut from firebase
      */
    firebase.auth().signOut()
  }

  /**
    * render
    * @return {ReactElement} Logout screen
    */
  render() {
    return (
      <p>You are now logged out</p>
    )
  }
}

export default Logout
