import { useContext } from "react"
import CartContext from "../context/CartContext";

function CheckoutItem({ items }) {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
  const { name, imageUrl, quantity, price } = items;

  const addItemHandler = () => addItemToCart(items)
  const removeItemHandler = () => removeItemFromCart(items)
  const clearItemHandler = () => clearItemFromCart(items)

  return <div className="checkout-item-container">
    <div className="image-container">
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
  </div>
}

export default CheckoutItem
