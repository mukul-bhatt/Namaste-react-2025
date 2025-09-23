import { DispatchContext, CountContext, CartContext } from "../utils/CartContext";
import { useState, useContext } from "react";


const CartProvider = ({children}) => {



    const [dataObj, setDataObj] = useState({});
    const [cartItemsArray, setCartItemsArray] = useState([]);

    return(
        <CountContext value={{dataObj, setDataObj}}>
            <CartContext value={{cartItemsArray, setCartItemsArray}}>

                {children}

            </CartContext>
        </CountContext>
    )
}

export default CartProvider;