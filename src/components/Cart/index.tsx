import { useContext } from "react";
import { CartContext } from "../../contexts/CartContex";
import { CartContainer, CartIcon } from "./styles";

export function Cart() {
  const { cart, totalItems } = useContext(CartContext);

  return (
    <CartContainer title="Link to checkout" to="checkout">
      <CartIcon size={24} weight="fill" />
      {cart.items.length !== 0 && <span>{totalItems}</span>}
    </CartContainer>
  );
}
