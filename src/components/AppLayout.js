import Header from "./Header";
import { Outlet } from "react-router";
import {useState, useContext} from "react";
import { CartContext } from "../utils/CartContext";


const AppLayout = () => {

  const [cartItemsArray, setCartItemsArray] = useState(useContext(CartContext));
  // const [count, setCount] = useState(0);

  return (

    <CartContext value={{cartItemsArray, setCartItemsArray}}>
    <div className="app">
      <Header /> 
      <Outlet />
    </div>
    </CartContext>

  );
};

export default AppLayout;
