import React, {
  Component,
  PropTypes,
} from 'react'
import { observer } from 'mobx-react'

const { object } = PropTypes
/**
  * Home view
  */
@observer
class Home extends Component {
  static contextTypes = {
    router: object.isRequired,
    store: object.isRequired,
  };
  /**
    * render
    * @return {ReactElement} Hello screen
    */
  render() {
    const { auth } = this.context.store
    let user = 'World'
    const { currentUser } = auth
    if (currentUser) {
      user = currentUser.email
    }
    const msg = (
      <h1> Hello {user}! </h1>
    )
    return msg
  }
}

export default Home
