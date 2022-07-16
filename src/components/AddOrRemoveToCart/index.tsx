import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { data } from "../../assets/mock-data";
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

interface Cart {
  id: string;
  items: CartItem[];
}

interface CartItem {
  id: string;
  quantity: number;
}

export function AddOrRemoveToCart({
  isCheckout,
  itemId,
}: AddOrRemoveToCartProps) {
  const { cart, setCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  function increase() {
    setQuantity((value) => value + 1);
  }
  function decrease() {
    if (quantity <= 0) {
      return null;
    }
    setQuantity((value) => value - 1);
  }
  function addToCart(id: string) {
    const itemAlreadyInCart = cart.items.find((item) => item.data.id === id);
    if (itemAlreadyInCart) {
      itemAlreadyInCart.quantity += quantity;
      setCart((value: Cart) => {
        return {
          ...value,
        };
      });
    } else {
      const itemInfo = data.find((item) => item.id === id);
      const newItem = { data: itemInfo, quantity };
      setCart((value: Cart) => {
        return {
          ...value,
          items: [...value.items, newItem],
        };
      });
    }
  }

  return (
    <AddOrRemoveToCartContainer>
      <div>
        <QuantityButton onClick={decrease} disabled={quantity <= 0}>
          <Minus weight="bold" />
        </QuantityButton>
        {quantity}
        <QuantityButton onClick={increase}>
          <Plus weight="bold" />
        </QuantityButton>
      </div>
      {isCheckout ? (
        <RemoveFromCartButton title="Remove item from cart">
          <Trash size={24} />
          Remover
        </RemoveFromCartButton>
      ) : (
        <AddToCartButton
          title="Add item to cart"
          onClick={() => addToCart(itemId)}
          disabled={quantity <= 0}
        >
          <ShoppingCartSimple size={24} weight="fill" />
        </AddToCartButton>
      )}
    </AddOrRemoveToCartContainer>
  );
}
