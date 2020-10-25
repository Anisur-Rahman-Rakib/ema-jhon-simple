import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import  './Header.css';
const Header = () => {
    const [loggedInUser , setloggedInUser] = useContext(UserContext);
    return (
        <div className="Header">
           <img src={logo} alt=""/>
           <nav>
               <Link to="/shop">Shop</Link>
               <Link to="/review">Order Review</Link>
               <Link to="Inventory">Manage Inventory</Link>
               <button onClick={() => setloggedInUser({})}>sign out</button>
           </nav>
        </div>
    );
};

export default Header;