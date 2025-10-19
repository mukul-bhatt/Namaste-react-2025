import { useState, useContext, useReducer } from "react";
import {
  CartContext,
  CountContext,
  DispatchContext,
} from "../utils/CartContext";


const AddToCartButton = ({ data, id }) => {
  // Using context from CartContext

  // const { cartItemsArray, setCartItemsArray } = useContext(CartContext);

  // const { dataObj, setDataObj } = useContext(CountContext);
  // console.log(dataObj); 

  // const [count,  setCount] = useState(0);
  // Reducer
  // const [count, dispatch] = useReducer(cartReducer, 0);

  // STATE
  // const [count, setCount] = useState(0);

  // handle click function

  // const handleClick = (data) => {
    
  //   const key = id;
  //   console.log("key", key);
  //   const value = count + 1;
  //   console.log("value", value);

  //   if (!dataObj[key]) {
  //     setCartItemsArray([...cartItemsArray, data]);
  //    }
  //   dispatch({
  //     type: "increase",
  //   });

  //   setDataObj((prev) => ({ ...prev, [key]: value }));
  // };

  // const handleDecrement = () => {
  //   // console.log("Data", data)
  //   dispatch({
  //     type: "decrease",
  //   });

  //   if(dataObj[id] === 1){
  //     setCartItemsArray(prev => prev.filter(item => item.card.info.id === id))
  //   }

  //   setDataObj(prev => {
  //     if (!(id in prev)) return prev;
  //     return{
  //       ...prev,
  //       [id]: (prev[id]) - 1 
  //     }
  //   });
  // };

  // const handleIncrement = () => {
  //   dispatch({
  //     type: "increase",
  //   });

  //   setDataObj(prev => {
  //     if (!(id in prev)) return prev;
  //     return{
  //       ...prev,
  //       [id]: (prev[id]) + 1
  //     }
  //   });
  // };

  // function cartReducer(currState, action) {
  //   if (action.type === "decrease") {
  //     return dataObj[id]-1;
  //   } else if (action.type === "increase") {
  //     return dataObj[id]+1;
  //   }
  // }


  const {count, setCount} = useContext(CountContext);
  const { cartItemsArray, setCartItemsArray } = useContext(CartContext);


  const handleIncrement = () => {
    setCount((prevCount) => ({
      ...prevCount, // Copy all other item quantities
      [id]: prevCount[id] + 1, // Increment the count for this specific id
    }));
  };

  const handleDecrement = () => {

    // First, check if the current quantity is 1.
    // If it is, we need to remove it from the cartItemsArray.
    if (count[id] === 1) {
      setCartItemsArray((prevArray) =>
        // Keep only the items that DO NOT match this item's id
        prevArray.filter((item) => item.card.info.id !== id)
      );
    }

    
    setCount((prevCount) => {
      const newQuantity = prevCount[id] - 1;
  
      // If the new quantity is 0, remove the item from the object
      if (newQuantity <= 0) {
        const newCount = { ...prevCount }; // Create a copy
        delete newCount[id]; // Delete the item's key
        return newCount; // Return the new object without this item
      } 
      // Otherwise, just update the count
      else {
        return {
          ...prevCount,
          [id]: newQuantity,
        };
      }
    });
  };

  // if length of count object is 0 i.e no items added yet
   if(!count[id]){
   return (
    <button
      className="cart-btn add"
      onClick={() => {
        setCount((prevCount) => ({
          ...prevCount,
          [id]: 1,
        }))

      setCartItemsArray([...cartItemsArray, data]);
      }
      }
    >
      Add
    </button>
  ) 
}
else{   //a check to only change the button that was changed, here i want to loop on count object and change all and only those button that were changed
 return (
    <div className="cart-controls">
      <button className="cart-btn minus" onClick={handleDecrement}>
        -
      </button>
      <button className="cart-btn add">{count[id]}</button>
      <button className="cart-btn plus" onClick={handleIncrement} >
        +
      </button>
    </div>
  )
}
};

export default AddToCartButton;

// Ideas for Cart functionality using Context:
// Lifting the state up - failed ❌
// EU7vn8mfRKTzIGwm - supabase foodie express project password
// Custom Hooks: You can also create a custom Hook to encapsulate the cart logic. A custom Hook could use useState or useReducer internally and then return the cart data and a set of functions to update it. This allows you to reuse the cart logic in any component that needs it, making your code cleaner and more modular. This is a good middle ground for medium-sized applications.
