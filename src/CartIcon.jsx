import { useContext } from "react";
import CartContext from "./context/CartContext";
import { AiOutlineShopping } from "react-icons/ai";
function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <AiOutlineShopping className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
