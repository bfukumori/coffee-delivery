import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import {
  CartButton,
  MinusIcon,
  PlusIcon,
  QuantityInputCartIcon,
  QuantityInputContainer,
} from "./styles";

export function QuantityInput() {
  const [quantity, seetQuantity] = useState(0);
  return (
    <QuantityInputContainer>
      <div>
        <MinusIcon size={14} weight="bold" />
        {quantity}
        <PlusIcon size={14} weight="bold" />
      </div>
      <CartButton>
        <QuantityInputCartIcon size={24} weight="fill" />
      </CartButton>
    </QuantityInputContainer>
  );
}
