import React, {
  Component,
  PropTypes,
} from 'react'
import {
  Link,
 } from 'react-router'
import * as firebase from 'firebase'
import { observer } from 'mobx-react'
import Auth from '../stores/Auth'

const { object } = PropTypes
/**
  * Main view of navigation bar
  */
@observer
class Main extends Component {
  static contextTypes = {
    router: object.isRequired,
  }

  static childContextTypes = {
    store: object,
  }

  getChildContext = () => {
    /**
     * Register stores to be passed down to components
     */
    return {
      store: {
        auth: Auth,
      },
    }
  }
/*
  componentWillMount = () => {
    /**
      * update loggedIn state whenever Firebase AuthStateChanged
      *
    firebase.auth().onAuthStateChanged(firebaseUser => {
      this.setState({
        loggedIn: (firebaseUser !== null),
      })
      this.props.appState.updateCurrentUser(firebaseUser)

      if (firebaseUser) {
        console.log('Logged IN', firebaseUser)
      } else {
        console.log('Not logged in')
      }
    })
  }
  */

  /**
    * render
    * @return {ReactElement} Navigation bar
    */
  render() {
    let loginOrOut
    let register
    if (Auth.user) {
      loginOrOut = (
        <li>
          <Link to="/logout" className="navbar-brand">Logout</Link>
        </li>
      )
      register = null
    } else {
      loginOrOut = (
        <li>
          <Link to="/login" className="navbar-brand">Login</Link>
        </li>
      )
      register = (
        <li>
          <Link to="/register" className="navbar-brand">
              Register
          </Link>
        </li>
      )
    }
    return (
      <span>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                  Simple Login Project
              </Link>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li>
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
              </li>
              {register}
              {loginOrOut}
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </span>
    )
  }
}

export default Main
