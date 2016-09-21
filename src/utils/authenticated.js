import * as firebase from 'firebase'
import * as config from '../../firebase.config'

/**
  * Initialize App to Firebase
  *
  * @event firebase#initializeApp
  */
firebase.initializeApp(config)

/**
  * requireAuth is provide auth validation before access to a route
  */
const requireAuth = (nextState, replace) => {
  /**
    * if user is not logged in hence will redirect to Login screen
    */
  if (firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

export default requireAuth
