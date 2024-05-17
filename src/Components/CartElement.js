import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import ItemCounter from "./ItemCounter";

const CartElement = () => {
  const { cart, setCart } = useContext(DataContext);

  const deleteProduct = (id) => {
   
    const newCart = cart.filter((element) => element.id !== id);

   
    setCart(newCart);
  };

  return cart.map((product) => (
    <div className='CartContent' key={product.id}>
      <img src={product.imagen} alt="" />
      <h2 className='name'>{product.name}</h2>
      <h4 className='Descripcion'>{product.Descripcion}</h4>
      <h4 className='Categoria'>{product.Categoria}</h4>
      <h3 className='Precio'>{product.Precio * product.quanty}</h3>
      <h4 className='Marca'>{product.Marca}</h4>
      <ItemCounter product={product} />
      <h1 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</h1>
    </div>
  ));
};

export default CartElement;
