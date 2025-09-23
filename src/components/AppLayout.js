import Header from "./Header";
import { Outlet } from "react-router";
import {useState, useContext} from "react";
import { CartContext } from "../utils/CartContext";
import CartProvider from "./CartProvider";


const AppLayout = () => {


  return (

    <CartProvider>
      

    <div className="app">
      <Header /> 
      <Outlet />
    </div>


    </CartProvider>

  );
};

export default AppLayout;
