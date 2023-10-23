import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      console.log("ya estan en el carrito");
    } else {
      console.log("todavia no esta en carrito");
    }
    setCart([...cart, product]);
  };
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };
  let data = { cart, addToCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
