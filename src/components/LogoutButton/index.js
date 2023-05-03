import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onRemoveAccess = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button type="button" className="buttons" onClick={onRemoveAccess}>
        Logout
      </button>
    </>
  )
}
export default withRouter(LogoutButton)
