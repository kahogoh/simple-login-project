import React from 'react'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
} from 'react-router'

import Main from '../views/Main'
import Login from '../views/login-register/Login'
import Logout from '../views/login-register/Logout'
import Register from '../views/login-register/Register'
import Home from '../views/Home'
import requireAuth from '../utils/authenticated'

/**
  * routes configuration for views
  */
export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='login' component={Login} />
      <Route path='logout' component={Logout} onEnter={requireAuth} />
      <Route path='register' component={Register} />
    </Route>
  </Router>
)
