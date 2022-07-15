import { useState } from "react";
import { CartContainer, CartIcon } from "./styles";

export function Cart() {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <CartContainer title="Link to checkout" to="checkout">
      <CartIcon size={24} weight="fill" />
      {isEmpty && <span>3</span>}
    </CartContainer>
  );
}
