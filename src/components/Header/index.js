import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/" className="nav-link">
      <li>home</li>
    </Link>
    <Link to="/about" className="nav-link">
      <li>about</li>
    </Link>
  </ul>
)
export default Header
