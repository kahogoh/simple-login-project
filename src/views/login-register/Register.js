import React, {
  Component,
  PropTypes,
} from 'react'
import * as firebase from 'firebase'
import Form from './components/Form'

const { object } = PropTypes

/**
  * Registration view with email and password Firebase signUp
  */

class Register extends Component {
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
    * @param {String} Email
    * @param {String} Password
    */
  handleSubmit = (email, pw) => {
    /**
      * handle createUser to firebase
      * @param {String} Email
      * @param {String} Password (at least 6 characters)
      */
    firebase.auth().createUserWithEmailAndPassword(email, pw)
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
    * @return {ReactElement} Registration form
    */
  render() {
    const errors = this.state.error ? (<p> {this.state.error} </p>) : ''
    return (
      <div className='col-sm-6 col-sm-offset-3'>
        <h1> Register </h1>
        <Form onSubmit={this.handleSubmit} errors={errors} />
      </div>
    )
  }
}

export default Register
