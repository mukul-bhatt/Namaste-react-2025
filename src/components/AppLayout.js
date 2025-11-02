import Header from "./Header";
import { Outlet } from "react-router";
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
