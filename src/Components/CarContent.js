import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import CartElement from './CartElement';
import CartTotal from './CartTotal';
import Navbar from './Navbar';

import "./CartContent.css";

const CarContent = () => {
  const { cart } = useContext(DataContext);

  return cart.length > 0 ? (
    <>
    <Navbar />
      <CartElement /> 
      <CartTotal />
    </>
  ) : (
    <>
      <Navbar />
      <h2 className="cart-message-center">El carrito está vacío</h2>
    </>
  );
};

export default CarContent;
