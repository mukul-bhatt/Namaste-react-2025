import "./Header.css";
import {useState} from "react";

const logo = new URL(
    '../assets/food_logo.jpg?width=100&height=95',
    import.meta.url
  );


const Header = () => {

    const [loginButton, setLoginButton] = useState("Login");

    return (  
        <div className="header">
        <img src={logo} alt="Logo" className="logo" />
     
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
        <button id="login-button" className="filter-btn" onClick={()=> setLoginButton(loginButton==="Login" ? "Logout" : "Login")}>{loginButton}</button>
            
        </div>
    
    )
} 

export default Header;