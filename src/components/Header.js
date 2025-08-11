import "./Header.css";

const logo = new URL(
    '../assets/food_logo.jpg?width=100&height=95',
    import.meta.url
  );


const Header = () => (  
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
        
    </div>

)

export default Header;