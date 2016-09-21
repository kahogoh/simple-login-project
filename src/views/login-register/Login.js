import React, {
  Component,
  PropTypes,
} from 'react'
import * as firebase from 'firebase'
import Form from './components/Form'

const { object } = PropTypes

/**
  * Login view with email and password Firebase signIn
  */

class Login extends Component {
  static contextTypes = {
    router: object.isRequired,
  }
  /**
    * @type {object}
    * @property {boolean} error from Firebase
    */
  state = {
    error: false,
  }
  /**
    * handle submit form event
    * @param {SytheticEvent} e
    */
  handleSubmit = (email, pw) => {
    /**
      * handle signIn to firebase
      * @param {String} Email
      * @param {String} Password
      */
    firebase.auth().signInWithEmailAndPassword(email, pw)
    .then(result => {
      /**
        * redirect to Home screen after success
        */
      this.context.router.replace('/')
    })
    .catch(e => {
      /**
        * update error message
        */
      const error = e.message
      this.setState({ error })
    })
  }

  /**
    * render
    * @return {ReactElement} Login form
    */
  render() {
    const errors = this.state.error ? (<p> {this.state.error} </p>) : ''
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <Form onSubmit={this.handleSubmit} errors={errors} />
      </div>
    )
  }
}

export default Login
