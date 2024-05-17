
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { Link } from 'react-router-dom';
import TotalItems from './TotalItems';

import './Navbar.css';
const Navbar = () => {
  const { cart } = useContext(DataContext);
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <Link to={"/"}>
        <h1 className='navbar-logo'>Aquí Encuentras lo Mejor en Tecnología del Momento</h1>
        </Link>
        <Link className='seeCarrito' to={"/cart"}>🛒
        {cart.length > 0 ? <TotalItems /> : null}
        
        </Link>
        

        </nav>
    </div>
  );
};

export default Navbar;
