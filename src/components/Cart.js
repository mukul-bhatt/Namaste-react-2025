import { clearCart } from "../utils/cartSlice";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {

   const cartItems = useSelector(store=>store.cart.items)

   const dispatch = useDispatch();
   const handleClearCart = () => {
      dispatch(clearCart())
   }
   
   return cartItems.length <= 0 ? <h1> oops your cart is empty</h1> : <div>

      <button onClick={handleClearCart}>clearcart</button>
   
      {cartItems.map((ele) => {
         return <MenuCard data={ele} />
      })}
   </div>

}

export default Cart;