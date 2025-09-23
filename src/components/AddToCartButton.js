import { useState, useContext, useReducer } from "react";
import {
  CartContext,
  CountContext,
  DispatchContext,
} from "../utils/CartContext";


const AddToCartButton = ({ data, id }) => {
  // Using context from CartContext

  const { cartItemsArray, setCartItemsArray } = useContext(CartContext);

  const { dataObj, setDataObj } = useContext(CountContext);
  // console.log(dataObj); 

  // const [count,  setCount] = useState(0);
  // Reducer
  const [count, dispatch] = useReducer(cartReducer, 0);

  // STATE
  // const [count, setCount] = useState(0);

  // handle click function

  const handleClick = (data) => {
    
    const key = id;
    console.log("key", key);
    const value = count + 1;
    console.log("value", value);

    if (!dataObj[key]) {
      setCartItemsArray([...cartItemsArray, data]);
     }
    dispatch({
      type: "increase",
    });

    setDataObj((prev) => ({ ...prev, [key]: value }));
  };

  const handleDecrement = () => {
    // console.log("Data", data)
    dispatch({
      type: "decrease",
    });

    if(dataObj[id] === 1){
      setCartItemsArray(prev => prev.filter(item => item.card.info.id === id))
    }

    setDataObj(prev => {
      if (!(id in prev)) return prev;
      return{
        ...prev,
        [id]: (prev[id]) - 1 
      }
    });
  };

  const handleIncrement = () => {
    dispatch({
      type: "increase",
    });

    setDataObj(prev => {
      if (!(id in prev)) return prev;
      return{
        ...prev,
        [id]: (prev[id]) + 1
      }
    });
  };

  function cartReducer(currState, action) {
    if (action.type === "decrease") {
      return dataObj[id]-1;
    } else if (action.type === "increase") {
      return dataObj[id]+1;
    }
  }



  return count === 0 ? (
    <button
      className="cart-btn add"
      onClick={() => {
        handleClick(data);
      }}
    >
      Add
    </button>
  ) : (
    <div className="cart-controls">
      <button className="cart-btn minus" onClick={handleDecrement}>
        -
      </button>
      <button className="cart-btn add">{!dataObj[id] ? "wrong" : dataObj[id]}</button>
      <button className="cart-btn plus" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default AddToCartButton;

// Ideas for Cart functionality using Context:
// Lifting the state up - failed ❌
// EU7vn8mfRKTzIGwm - supabase foodie express project password
// Custom Hooks: You can also create a custom Hook to encapsulate the cart logic. A custom Hook could use useState or useReducer internally and then return the cart data and a set of functions to update it. This allows you to reuse the cart logic in any component that needs it, making your code cleaner and more modular. This is a good middle ground for medium-sized applications.
