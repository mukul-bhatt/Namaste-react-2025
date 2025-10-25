// import {createSlice} from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: [],
//         count: []
//     },
//     reducers: {
//         addItem: (state, action) => {
//             state.items.push(action.payload);
//         },
//         removeItem: (state) => {
//             state.items.pop();
//         },
//         clearCart: (state) => { 
//             state.items = []
//         },
//         // increaseCount: (state, action) => {

//         //     //check if object is already present in items
//         //     if(state.items.some(obj => obj.card.info.id === action.payload.id)){
//         //         state.count.push(action.payload);
//         //     }
//         //     else{   // if not then just increase it's count
//         //         state.count
//         //     }
//         // }

//         // src/utils/cartSlice.js


//     increaseCount: (state, action) => {
//       // action.payload will be {id: "...", quantity: ...}
//       const itemToUpdate = action.payload;

//       // 1. Find if the item is already in the count array
//         let existingItem = false;
//       if(state.count.length !== 0){
//          existingItem = state.count.find(item => item.id === itemToUpdate.id);
//       }
      

//       // 2. THIS IS THE 'ELSE' YOU WERE ASKING ABOUT:
//       // If it exists, just find it and increment its quantity
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } 
//       // 3. If it does NOT exist, push the new item (which has quantity 1)
//       else {
//         state.count.push(itemToUpdate);
//       }
// }
//     }
// })

// export const {addItem, removeItem, clearCart, increaseCount} = cartSlice.actions;

// export default cartSlice.reducer;



// src/utils/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // This is the ONLY state you need
  },
  reducers: {
    // This reducer is now smart.
    // It adds a new item OR increments the quantity.
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemToAdd.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Add the new item with a starting quantity of 1
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
    },

    // A new reducer for the "-" button
    decrementItem: (state, action) => {
      const idToDecrement = action.payload; // Just pass the ID
      const existingItem = state.items.find(
        (item) => item.card.info.id === idToDecrement
      );

      if (existingItem) {
        existingItem.quantity -= 1;

        // If quantity is 0, remove the item from the array
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== idToDecrement
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Note the new actions we are exporting
export const { addItem, decrementItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;