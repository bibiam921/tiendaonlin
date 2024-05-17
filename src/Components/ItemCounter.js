import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const ItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(DataContext);

  const decrease = () => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart && productInCart.quanty > 1) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quanty: item.quanty - 1 } : item)));
    }
  };

  return (
    <>
      <p className='counter-button' onClick={decrease}>-</p>
      <p>{product.quanty}</p>  
      <p className='counter-button' onClick={() => buyProducts(product)}>+</p> 
    </>
  );
};

export default ItemCounter;
