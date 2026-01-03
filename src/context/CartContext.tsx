import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart(prev => {
      // already irundha duplicate venda
      if (prev.some(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
