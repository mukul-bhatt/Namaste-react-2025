import { useState, useContext } from "react";
import { CartContext, CountContext } from "../utils/CartContext";

const AddToCartButton = ({data}) => {

    // Using context from CartContext
//   const { cartItemsArray, setCartItemsArray, count, setCount } = useContext(CartContext);
  const { cartItemsArray, setCartItemsArray } = useContext(CartContext);

  // handle click function

  const handleClick = (data) => {
    if (!cartItemsArray.includes(data)) {
      setCartItemsArray([...cartItemsArray, data]);
    }
    setCount(1);
  };

    const [count, setCount] = useState(0);

    

    return (count === 0 ? (

        // <CountContext value={{count, setCount}}>
        <button
          className="cart-btn add"
          onClick={()=>{
            handleClick(data)
          }}
        >
          Add
        </button>
        // </CountContext>
      ) : (
        // <CountContext value={{count, setCount}}>
        <div className="cart-controls">
        <button className="cart-btn minus" onClick={()=>setCount(count-1)}>-</button>
        <button className="cart-btn add" >{count}</button>
        <button className="cart-btn plus" onClick={()=>setCount(count+1)}>+</button>
      </div>
    //   {/* </CountContext> */}

      ))
}

export default AddToCartButton;