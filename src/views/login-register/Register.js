import React, {
  Component,
  PropTypes,
} from 'react'
import Form from './components/Form'

const { object } = PropTypes

/**
  * Registration view with email and password Firebase signUp
  */

class Register extends Component {
  static contextTypes = {
    router: object.isRequired,
    store: object.isRequired,
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
  handleSubmit = async(email, pw) => {
    const { auth } = this.context.store
    const res = await auth.register(email, pw)
    if (res.success) {
      /**
        * redirect to Home screen after success
        */
      this.context.router.replace('/')
    } else {
      /**
        * update error message
        */
      this.setState({ error: res.error })
    }
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
