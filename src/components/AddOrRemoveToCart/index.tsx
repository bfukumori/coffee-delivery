import { useState } from "react";
import {
  AddOrRemoveToCartContainer,
  AddToCartButton,
  AddToCartIcon,
  MinusIcon,
  PlusIcon,
  RemoveFromCartButton,
  RemoveFromCartIcon,
} from "./styles";

interface AddOrRemoveToCartProps {
  isCheckout?: boolean;
}

export function AddOrRemoveToCart({ isCheckout }: AddOrRemoveToCartProps) {
  const [quantity, seetQuantity] = useState(0);
  return (
    <AddOrRemoveToCartContainer>
      <div>
        <MinusIcon size={14} weight="bold" />
        {quantity}
        <PlusIcon size={14} weight="bold" />
      </div>
      {isCheckout ? (
        <RemoveFromCartButton>
          <RemoveFromCartIcon size={24} />
          Remover
        </RemoveFromCartButton>
      ) : (
        <AddToCartButton>
          <AddToCartIcon size={24} weight="fill" />
        </AddToCartButton>
      )}
    </AddOrRemoveToCartContainer>
  );
}
