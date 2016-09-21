import Auth from '../stores/Auth'

/**
  * requireAuth is provide auth validation before access to a route
  */
const requireAuth = (nextState, replace) => {
  /**
    * if user is not logged in hence will redirect to Login screen
    */
  if (!Auth.isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

export default requireAuth
