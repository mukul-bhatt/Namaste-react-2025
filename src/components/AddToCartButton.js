// import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem, increaseCount } from "../utils/cartSlice";


// const AddToCartButton = ({ data, id }) => {
//   const cartItemsArray = useSelector((store) => store.cart.items);
// //   const countArray = useSelector((store) => store.cart.count);
// //   const countObject = countArray.find(obj => obj.id === id);
// //   const quantity = countObject[quantity];
// //   console.log("CountObject", countObject?.quantity);
// // console.log("data", data);

//   const dispatch = useDispatch();

//   const handleRemoveItem = () => {
//     dispatch(removeItem());
//   };

//   const handleAddItem = () => {
    
//       if(cartItemsArray.some(obj => obj.card.info.id === id)){
//         dispatch(addItem(data));
//         dispatch(increaseCount({id: id,
//             quantity : 1
//           }));
//       }else{
//         dispatch(increaseCount());
//       }

      

//   };


//   if(!cartItemsArray.some(obj => obj.card.info.id === id)){
//    return <div>
      
//         <button className="cart-btn add" onClick={handleAddItem}>ADD</button>
       
//       </div>
//   }

//   return (
//     <div>
//       <div className="cart-controls">
//         <button className="cart-btn minus" onClick={handleRemoveItem}>
//           -
//         </button>
//         <button className="cart-btn add">{countObject?.quantity}</button>
//         <button className="cart-btn plus" onClick={handleAddItem}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddToCartButton;

// // Ideas for Cart functionality using Context:
// // Lifting the state up - failed ❌
// // EU7vn8mfRKTzIGwm - supabase foodie express project password
// // Custom Hooks: You can also create a custom Hook to encapsulate the cart logic. A custom Hook could use useState or useReducer internally and then return the cart data and a set of functions to update it. This allows you to reuse the cart logic in any component that needs it, making your code cleaner and more modular. This is a good middle ground for medium-sized applications.



// src/components/AddToCartButton.js
import { useDispatch, useSelector } from "react-redux";
// Import your new, smarter actions
import { addItem, decrementItem } from "../utils/cartSlice";

const AddToCartButton = ({ data, id }) => {
  const dispatch = useDispatch();

  // 1. Get the ONE items array from the store
  const cartItems = useSelector((store) => store.cart.items);

  // 2. Find THIS specific item in the array
  const itemInCart = cartItems.find((item) => item.card.info.id === id);

  // 3. Get its quantity (or 0 if it doesn't exist)
  const currentQuantity = itemInCart ? itemInCart.quantity : 0;

  // --- These handlers are now very simple ---

  const handleAddItem = () => {
    // This one "addItem" action will handle
    // both adding and incrementing!
    dispatch(addItem(data));
  };

  const handleRemoveItem = () => {
    // Just pass the ID
    dispatch(decrementItem(id));
  };

  // --- Your UI logic is now clean ---

  if (currentQuantity === 0) {
    // If quantity is 0, show the "Add" button
    return (
      <button className="cart-btn add" onClick={handleAddItem}>
        Add
      </button>
    );
  } else {
    // Otherwise, show the controls
    return (
      <div className="cart-controls">
        <button className="cart-btn minus" onClick={handleRemoveItem}>
          -
        </button>
        <button className="cart-btn add">{currentQuantity}</button>
        <button className="cart-btn plus" onClick={handleAddItem}>
          +
        </button>
      </div>
    );
  }
};

export default AddToCartButton;