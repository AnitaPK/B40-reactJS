import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const addToCart = (item) => {
    console.log('********')
    console.log(item)
    // setCart([...cart, item]);
    // setCartLength(cart.length);
    console.log("cart", cart);
    console.log("legth", cartLength);
  };

//   const RemoveFromCart = (id) => {
//     setCart(()=>cart.filter((item) => item.prodID !== id));
//     setCartLength(cart.length);
//   };
//   console.log("cart", cart);
  useEffect(() => {
    setCartLength(cart.length);
    
  }, [cart]);
//   console.log("legth", cartLength);
  return (
    <CartContext.Provider
      value={{ cart, cartLength, setCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
