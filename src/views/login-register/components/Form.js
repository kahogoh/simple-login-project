import React, {
  Component,
  PropTypes,
} from 'react'

const { func, object, string, oneOfType } = PropTypes

/**
  * Form component for Login and Register view
  */
class Form extends Component {
  static propTypes = {
    onSubmit: func.isRequired,
    errors: oneOfType([
      object,
      string,
    ]),
  }
  /**
    * handle submit form event
    * @param {SytheticEvent} e
    */
  handleSubmit = (e) => {
    e.preventDefault()
    const email = this.refs.email.value
    const pw = this.refs.pw.value
    this.props.onSubmit(email, pw)
  }
  /**
    * render
    * @return {ReactElement} Form
    */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label> Email </label>
          <input className="form-control" ref="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input ref="pw" type="password" className="form-control" placeholder="Password" />
        </div>
        {this.props.errors}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }
}

export default Form
