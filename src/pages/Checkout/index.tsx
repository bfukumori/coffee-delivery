import { useState } from "react";
import { AddOrRemoveToCart } from "../../components/AddOrRemoveToCart";
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutHeading,
  CheckoutOrderButton,
  CheckoutOrderItems,
  CheckoutOrderTotal,
  CheckoutOrder,
  CheckoutFormFieldSet,
  MapPinIcon,
  InputFieldsWrapper,
  CurrencyDollarIcon,
  RadioInputWrapper,
  CreditCardIcon,
  BankIcon,
  MoneyIcon,
} from "./styles";

export function Checkout() {
  const [paymentType, setPaymentType] = useState("");

  return (
    <CheckoutContainer>
      <div>
        <CheckoutHeading>Complete seu pedido</CheckoutHeading>
        <CheckoutForm>
          <CheckoutFormFieldSet>
            <MapPinIcon size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutFormFieldSet>
          <InputFieldsWrapper>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" maxLength={2} />
          </InputFieldsWrapper>
        </CheckoutForm>
        <CheckoutForm>
          <CheckoutFormFieldSet>
            <CurrencyDollarIcon size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CheckoutFormFieldSet>
          <RadioInputWrapper>
            <input
              type="radio"
              name="payment"
              id="credit"
              value="CREDIT"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <label htmlFor="credit">
              <CreditCardIcon size={16} />
              Cartão de crédito
            </label>

            <input
              type="radio"
              name="payment"
              id="debit"
              value="DEBIT"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <label htmlFor="debit">
              <BankIcon size={16} />
              Cartão de débito
            </label>

            <input
              type="radio"
              name="payment"
              id="money"
              value="MONEY"
              onChange={(e) => setPaymentType(e.target.value)}
            />
            <label htmlFor="money">
              {" "}
              <MoneyIcon size={16} />
              Dinheiro
            </label>
          </RadioInputWrapper>
        </CheckoutForm>
      </div>
      <div>
        <CheckoutHeading>Cafés selecionados</CheckoutHeading>
        <CheckoutOrder>
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
          <CheckoutOrderButton type="submit">
            Confirmar pedido
          </CheckoutOrderButton>
        </CheckoutOrder>
      </div>
    </CheckoutContainer>
  );
}
