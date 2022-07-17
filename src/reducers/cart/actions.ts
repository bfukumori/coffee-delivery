export enum TypeActions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_ITEM = "INCREMENT_ITEM",
  DECREMENT_ITEM = "DECREMENT_ITEM",
}

export function addToCartAction(id: string, quantity: number) {
  return { type: TypeActions.ADD_TO_CART, payload: { id, quantity } };
}

export function removeFromCartAction(id: string) {
  return { type: TypeActions.REMOVE_FROM_CART, payload: { id } };
}

export function incrementItemAction(id: string) {
  return { type: TypeActions.INCREMENT_ITEM, payload: { id } };
}

export function decrementItemAction(id: string) {
  return { type: TypeActions.DECREMENT_ITEM, payload: { id } };
}
