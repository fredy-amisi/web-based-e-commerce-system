import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Css/styling.css';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={isMenuOpen ? "nav-links show" : "nav-links"}>
          <li><Link to="/Index" ><span>HOME</span></Link></li>
          <li><Link to="/About" ><span>ABOUT</span></Link></li>
          <li className="dropdown">
            <span>SERVICES</span>
            <ul className="dropdown-content">
              <li><Link to="/Fruits">FRUITS </Link></li>
              <li><Link to="/Vegetables">VEGETABLES</Link></li>
              <li><Link to="/Poultry">POULTRY</Link></li>
              <li><Link to="/Admin">MEAT</Link></li>
              <li><Link to="/Dairy">DAIRY</Link></li>
            </ul>
          </li>
          <li><Link to="/Contact" ><span>CONTACT</span></Link></li>
          <li><Link to="/Login" ><span>LOGIN</span></Link></li>
          
          <li><Link to="/Signup" ><span>SIGNUP</span></Link></li>
        </ul>
      </nav>
      <Link to="/Cartpage" className="cart">
        <FaShoppingCart  className="cart_icon"/>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </header>
  );
};

export default Navbar;
