import { useContext, useEffect, useState } from "react";
import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";
import { CartContext } from "../../contexts/CartContex";

import {
  AddOrRemoveToCartContainer,
  AddToCartButton,
  QuantityButton,
  RemoveFromCartButton,
} from "./styles";

interface AddOrRemoveToCartProps {
  isCheckout?: boolean;
  itemId: string;
}

export function AddOrRemoveToCart({
  isCheckout,
  itemId,
}: AddOrRemoveToCartProps) {
  const { cart, addToCart, removeFromCart, incrementItem, decrementItem } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const itemQuantity = cart.items.find((item) => item.id === itemId)?.quantity;

  function increase() {
    setQuantity((value) => value + 1);
  }
  function decrease() {
    if (quantity <= 0) {
      return null;
    }
    setQuantity((value) => value - 1);
  }

  useEffect(() => {
    setQuantity(0);
  }, [addToCart]);

  return (
    <AddOrRemoveToCartContainer>
      <div>
        <QuantityButton
          onClick={isCheckout ? () => decrementItem(itemId) : decrease}
          disabled={itemQuantity! <= 0}
        >
          <Minus weight="bold" />
        </QuantityButton>
        {isCheckout ? itemQuantity : quantity}
        <QuantityButton
          onClick={isCheckout ? () => incrementItem(itemId) : increase}
        >
          <Plus weight="bold" />
        </QuantityButton>
      </div>
      {isCheckout ? (
        <RemoveFromCartButton
          title="Remove item do carrinho"
          onClick={() => removeFromCart(itemId)}
        >
          <Trash size={24} />
          Remover
        </RemoveFromCartButton>
      ) : (
        <AddToCartButton
          title="Adiciona item ao carrinho"
          onClick={() => addToCart(itemId, quantity)}
          disabled={itemQuantity! <= 0}
        >
          <ShoppingCartSimple size={24} weight="fill" />
        </AddToCartButton>
      )}
    </AddOrRemoveToCartContainer>
  );
}
