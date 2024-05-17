import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import "./Products.css";

function Products() {
    const { data, buyProducts } = useContext(DataContext);

   
    return (
        <div className="product-container">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.imagen} alt="" />
                    <h2>{product.name}</h2>
                    <h4>{product.Descripcion}</h4>
                    <h4>{product.Categoria}</h4>
                    <h3>${product.Precio}</h3>
                    <h4>Marca: {product.Marca}</h4>
                    <button onClick={() => buyProducts(product)}>Comprar</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
