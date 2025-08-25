import "./Header.css";
import { useState } from "react";
import { Link } from "react-router";

const logo = new URL(
  "../assets/food_logo.jpg?width=100&height=95",
  import.meta.url
);

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About Us</li>
          </Link>

          <Link to="contact">
            <li>Contact us</li>
          </Link>
          
          <li>Cart</li>
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
    </div>
  );
};

export default Header;
