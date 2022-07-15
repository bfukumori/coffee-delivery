import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import {
  AddOrRemoveToCartContainer,
  AddRemoveIcon,
  AddToCartButton,
  AddToCartIcon,
  RemoveFromCartButton,
  RemoveFromCartIcon,
} from "./styles";

interface AddOrRemoveToCartProps {
  isCheckout?: boolean;
}

export function AddOrRemoveToCart({ isCheckout }: AddOrRemoveToCartProps) {
  const [quantity, setQuantity] = useState(0);
  return (
    <AddOrRemoveToCartContainer>
      <div>
        <AddRemoveIcon as={Minus} size={14} weight="bold" />
        {quantity}
        <AddRemoveIcon as={Plus} size={14} weight="bold" />
      </div>
      {isCheckout ? (
        <RemoveFromCartButton title="Remove item from cart">
          <RemoveFromCartIcon size={24} />
          Remover
        </RemoveFromCartButton>
      ) : (
        <AddToCartButton title="Add item to cart">
          <AddToCartIcon size={24} weight="fill" />
        </AddToCartButton>
      )}
    </AddOrRemoveToCartContainer>
  );
}
