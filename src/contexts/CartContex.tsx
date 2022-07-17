import { createContext, ReactNode, useCallback, useReducer } from "react";
import { Coffee } from "../assets/mock-data";
import {
  addToCartAction,
  decrementItemAction,
  incrementItemAction,
  removeFromCartAction,
} from "../reducers/cart/actions";
import { CartReducer, CartState } from "../reducers/cart/reducer";

interface CartContextData {
  cart: Cart;
  totalItemsInCart: number;
  totalPriceInCart: number;
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
}

export interface Cart {
  id: string | null;
  items: CartItem[];
}

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const initialValue: CartState = {
  id: null,
  items: [],
};

function init(initialValue: CartState) {
  const storedJSON = localStorage.getItem("@coffee-delivery:cart");
  if (storedJSON) {
    return JSON.parse(storedJSON);
  }
  return initialValue;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(CartReducer, initialValue, init);

  const totalQuantityByItemArray = cart.items.map((item) => item.quantity);
  const totalItemsInCart = totalQuantityByItemArray.reduce(
    (acc, value) => acc + value,
    0
  );

  const totalPriceByItemArray = cart.items.map(
    (item) => item.quantity * item.unitPrice
  );
  const totalPriceInCart = totalPriceByItemArray.reduce(
    (acc, value) => acc + value,
    0
  );

  function addToCart(id: string, quantity: number) {
    dispatch(addToCartAction(id, quantity));
  }
  function removeFromCart(id: string) {
    dispatch(removeFromCartAction(id));
  }

  function incrementItem(id: string) {
    dispatch(incrementItemAction(id));
  }

  function decrementItem(id: string) {
    dispatch(decrementItemAction(id));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItemsInCart,
        totalPriceInCart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
