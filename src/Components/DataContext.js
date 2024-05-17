import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    
    
    useEffect(() => {
        axios("data.json").then((res) =>  setData(res.data));
              
                
            }, []);

            const buyProducts = (product) => {
                const productInCart = cart.find((item) => item.id === product.id);
                if (productInCart) {
                    setCart(cart.map((item) => item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item));
                } else {
                    setCart([...cart, { ...product, quanty: 1 }]);
                }
            };
        
            
    return (
        <DataContext.Provider value={{ data, cart, setCart, buyProducts }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
