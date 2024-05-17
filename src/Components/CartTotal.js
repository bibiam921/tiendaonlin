import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function CartTotal() {
    const { cart } = useContext(DataContext);
   const total = cart.reduce((acc, ele)=> acc + ele.Precio * ele.quanty , 0);
    return (
    <div className="CartTotal"><h3>Total a pagar: ${total}</h3>  </div>
  )
}

export default CartTotal