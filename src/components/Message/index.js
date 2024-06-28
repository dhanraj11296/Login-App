// Write your code here
import './index.css'
const Mesage = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{message}</h1>
}
export default Mesage
