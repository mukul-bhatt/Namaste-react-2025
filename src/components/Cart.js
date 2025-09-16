import "./Cart.css";
import { useState, useContext } from "react";
import { CartContext } from "../utils/CartContext";
import MenuCard from "./MenuCard";

const Cart = () => {
  const { cartItemsArray } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <div className="cart">
        {cartItemsArray.map((item) => {
            console.log(item);
          return (
            <div key={item.card.info.id}>
              <MenuCard data={item} />
            </div>
          );
        })}
      </div>

      <h2>Items in Cart: {cartItemsArray.length}</h2>
    </>
  );
};

export default Cart;


// Two ways:
//  -- array hi check krey add krne se pehle
//  -- hum add hi na krne de cart mai