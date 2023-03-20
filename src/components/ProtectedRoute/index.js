import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const JswToken = Cookies.get('jwt_token')
  if (JswToken === undefined) {
    return <Redirect to="login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
