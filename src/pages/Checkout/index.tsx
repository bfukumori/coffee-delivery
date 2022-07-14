import { AddOrRemoveToCart } from "../../components/AddOrRemoveToCart";
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutOrder,
  CheckoutOrderButton,
  CheckoutOrderItems,
  CheckoutOrderTotal,
  CheckoutOrderWrapper,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <h2>Complete seu pedido</h2>
        <form action=""></form>
      </CheckoutForm>
      <CheckoutOrder>
        <h2>Cafés selecionados</h2>
        <CheckoutOrderWrapper>
          <CheckoutOrderItems>
            <img src="./src/assets/images/americano.png" alt="" />
            <div>
              <h3>Expresso Tradicional</h3>
              <AddOrRemoveToCart isCheckout />
            </div>
            <span>R$ 9,90</span>
          </CheckoutOrderItems>
          <CheckoutOrderItems>
            <img src="./src/assets/images/americano.png" alt="" />
            <div>
              <h3>Expresso Tradicional</h3>
              <AddOrRemoveToCart isCheckout />
            </div>
            <span>R$ 9,90</span>
          </CheckoutOrderItems>
          <CheckoutOrderTotal>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </CheckoutOrderTotal>
          <CheckoutOrderButton type="button">
            Confirmar pedido
          </CheckoutOrderButton>
        </CheckoutOrderWrapper>
      </CheckoutOrder>
    </CheckoutContainer>
  );
}
