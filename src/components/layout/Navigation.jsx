import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import CrwnLogo from '../../assets/crown.svg?react'
import UserContext from "../../context/User"
import CartContext from "../../context/CartContext"
import { singOutUser } from "../../utils/firebase/firebase"
import CartIcon from "../../CartIcon"
import CartDropDown from "../CartDropDown"
function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <div className="navigation">
        <Link to='/' className="logo-container">
          <img src={CrwnLogo} alt="logo" className="logo" />
        </Link>
        <div className="navlinks-container">
          <Link className="nav-link" to='/shop'>Shop</Link>
          {currentUser ? (<span className="nav-link" onClick={singOutUser}>Sing Out</span>) : <Link className="nav-link" to='/sign-in'>Sign-in</Link>}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
