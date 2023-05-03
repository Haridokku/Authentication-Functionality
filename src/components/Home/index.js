import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="describe">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
