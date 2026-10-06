import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import Button from "./shared/Button"
import CartContext from "../context/CartContext"


function CartDropDown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={() => navigate('/checkout')}>Checkout</Button>
    </div>
  )
}

export default CartDropDown
