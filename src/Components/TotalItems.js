import React, { useContext } from "react";
import { DataContext } from "./DataContext";



function TotalItems() {

    
    const { cart } = useContext(DataContext);
  
    const itemsQuanty = cart.reduce((acc, ele) => acc+ ele.quanty, 0)
  
    return (
    <span className="cart-items-total">{itemsQuanty}</span>
  )
}

export default TotalItems