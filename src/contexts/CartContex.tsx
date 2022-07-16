import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../assets/mock-data";

interface CartContextData {
  cart: Cart;
  setCart: any;
  totalItems: number;
  totalPrice: number;
}

interface Cart {
  id: string;
  items: CartItem[];
}

interface CartItem {
  data: Coffee;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart>({
    id: "1",
    items: [],
  });

  const totalItemsInCart = cart.items.map((item) => item.quantity);
  const totalItems = totalItemsInCart.reduce((acc, value) => acc + value, 0);
  const totalPriceByItem = cart.items.map(
    (item) => item.quantity * item.data.unitPrice
  );
  const totalPrice = totalPriceByItem.reduce((acc, value) => acc + value, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
