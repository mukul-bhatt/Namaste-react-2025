import "./Cart.css";
import { useState, useContext } from "react";
import { CartContext, CountContext } from "../utils/CartContext";
import MenuCard from "./MenuCard";

const Cart = () => {
  const { cartItemsArray } = useContext(CartContext);
  const {count} = useContext(CountContext);

  return JSON.stringify(count) === '{}' ? (
    <h1>Cart is empty</h1>
  ) :(
    <>
      <h1>Cart</h1>
      <div className="cart">
        {cartItemsArray.map((item) => {
            // console.log(item);
          return (
            <div key={item.card.info.id}>
              <MenuCard data={item} />
            </div>
          );
        })}
      </div>

      <h2>Unique Items in Cart: {cartItemsArray.length}</h2>
      <h2>Toal Items in Cart: {Object.values(count).reduce((acc, curr)=>{
        return acc + curr;
      }, 0)}</h2>
    </>
  );
};

export default Cart;


// Two ways:
//  -- array hi check krey add krne se pehle
//  -- hum add hi na krne de cart mai