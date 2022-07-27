import { createContext, ReactNode, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";
import { CoffeeType } from "../assets/mock-data";
import {
  addToCartAction,
  decrementItemAction,
  incrementItemAction,
  removeFromCartAction,
  resetCartAction,
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
  resetCart: (initialValue: CartState) => void;
}

export interface Cart {
  id: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  title: string;
  description: string;
  type: CoffeeType[];
  unitPrice: number;
  img: string;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const initialValue: CartState = {
  id: uuidV4(),
  items: [],
};

function init() {
  const storedStateAsJSON = localStorage.getItem(
    "@coffee-delivery:cart-state-1.0.0"
  );
  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON);
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
    toast.success("Item added.");
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

  function resetCart(initialValue: CartState) {
    dispatch(resetCartAction(initialValue));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart);
    if (cart.items.length !== 0) {
      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    } else if (cart.items.length === 0) {
      localStorage.removeItem("@coffee-delivery:cart-state-1.0.0");
    }
  }, [cart]);

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
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
