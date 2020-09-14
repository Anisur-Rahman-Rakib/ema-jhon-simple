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
               <Link to="/shop">shop</Link>
               <Link to="/review">order Review</Link>
               <Link to="Inventory">manage inventory</Link>
               <button onClick={() => setloggedInUser({})}>sign out</button>
           </nav>
        </div>
    );
};

export default Header;