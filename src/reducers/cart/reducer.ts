import { data } from "../../assets/mock-data";
import { CartItem } from "../../contexts/CartContex";
import { TypeActions } from "./actions";

interface IPayload {
  id: string;
  quantity?: number;
}

export interface CartAction {
  type: TypeActions;
  payload: IPayload;
}

export interface CartState {
  id: string;
  items: CartItem[];
}

export function CartReducer(state: CartState, action: CartAction): CartState {
  const { type, payload } = action;
  const itemInCart = state.items.find((item) => item.id === payload.id);

  switch (type) {
    case "ADD_TO_CART":
      if (itemInCart && payload.quantity) {
        itemInCart.quantity += payload.quantity;
        return {
          ...state,
        };
      }
      const itemInfo = data.find((item) => item.id === payload.id);
      if (itemInfo && payload.quantity) {
        return {
          ...state,
          items: [...state.items, { ...itemInfo, quantity: payload.quantity }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };

    // case "DECREMENT_ITEM":
    //   if (itemInCart) {
    //     itemInCart.quantity -= 1;
    //     if (itemInCart.quantity <= 0) {
    //       return {
    //         ...state,
    //         items: state.items.filter((item) => item.id !== payload.id),
    //       };
    //     }
    //     return {
    //       ...state,
    //     };
    //   }
    // case "INCREMENT_ITEM":
    //   if (itemInCart) {
    //     itemInCart.quantity += 1;
    //     return {
    //       ...state,
    //     };
    //   }

    default:
      return state;
  }
}
