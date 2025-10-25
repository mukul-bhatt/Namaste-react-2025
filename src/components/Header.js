import "./Header.css"
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";




const logo = new URL(
  "../assets/food_logo.jpg?width=100&height=95",
  import.meta.url
);


const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");


  const cartItems = useSelector(store => store.cart.items)
  const status = useOnlineStatus();
  // console.log("status", status);
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      <div className="nav-items">
        <ul>
          <Link to="/" >
            <li>Home</li>
          </Link>
          <Link to="about" >
            <li>About Us</li>
          </Link>

          <Link to="contact" >
            <li>Contact us</li>
          </Link>

          <Link to="grocery" >
            <li>Grocery</li>
          </Link>
          
          <Link to="cart" >
            <li>Cart- {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <button
        id="login-button"
        className="filter-btn"
        onClick={() =>
          setLoginButton(loginButton === "Login" ? "Logout" : "Login")
        }
      >
        {loginButton}
      </button>

      <button>
       Online Status {status ? "✅" : "❌"} 
      </button>
    </div>
  );
};

export default Header;
