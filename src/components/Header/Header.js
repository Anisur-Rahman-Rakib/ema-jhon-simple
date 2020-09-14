import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import  './Header.css';
const Header = () => {
    return (
        <div className="Header">
           <img src={logo} alt=""/>
           <nav>
               <Link to="/shop">shop</Link>
               <Link to="/review">order Review</Link>
               <Link to="Inventory">manage inventory</Link>
           </nav>
        </div>
    );
};

export default Header;