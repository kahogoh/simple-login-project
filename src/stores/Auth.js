import { observable, computed } from 'mobx'
import singleton from 'singleton'
import * as firebase from 'firebase'
import * as config from '../../firebase.config'

/**
  * Initialize App to Firebase
  *
  * @event firebase#initializeApp
  */
firebase.initializeApp(config)

/**
  * Auth ActionC
  */
class Auth extends singleton {
  @observable user = firebase.auth().currentUser
  @computed get isLoggedIn() {
    return !!this.user
  }

  @computed get currentUser() {
    return this.user
  }

  register = (email, pw) =>
    /**
      * handle createUser to firebase
      * @param {String} Email
      * @param {String} Password (at least 6 characters)
      */
    firebase.auth().createUserWithEmailAndPassword(email, pw)
    .then(res => {
      // Storage.set('token', res.data.token)
      this.user = res
      return {
        success: true,
      }
    })
    .catch(e => {
      /**
        * update error message
        */
      const error = e.message
      return {
        success: false,
        error,
      }
    })

  login = (email, pw) =>
    /**
      * handle signIn to firebase
      * @param {String} Email
      * @param {String} Password
      */
    firebase.auth().signInWithEmailAndPassword(email, pw)
    .then(res => {
      // Storage.set('token', res.data.token)
      this.user = res
      return {
        success: true,
      }
    })
    .catch(e => {
      /**
        * update error message
        */
      const error = e.message
      return {
        success: false,
        error,
      }
    })

  logout = () => {
    // Storage.remove('token')
    this.user = null
    /**
      * handle signOut from firebase
      */
    firebase.auth().signOut()
  }
}

export default Auth.get()
