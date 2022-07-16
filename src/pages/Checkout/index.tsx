import { useContext, useState } from "react";
import { AddOrRemoveToCart } from "../../components/AddOrRemoveToCart";
import { CartContext } from "../../contexts/CartContex";
import { formatPrice } from "../../helper/formatPrice";
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
  const { cart, totalItems, totalPrice } = useContext(CartContext);

  const [paymentType, setPaymentType] = useState("");

  function handleSubmit() {
    event?.preventDefault();
    console.log({ msg: "Formulario enviado", paymentType, cart });
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit} id="order">
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
      </form>
      <div>
        <CheckoutHeading>Cafés selecionados</CheckoutHeading>
        <CheckoutOrder>
          {cart.items.map((item) => (
            <CheckoutOrderItems key={item.data.id}>
              <img src="./src/assets/images/americano.png" alt="" />
              <div>
                <h3>Expresso Tradicional</h3>
                <AddOrRemoveToCart itemId={item.data.id} isCheckout />
              </div>
              <span>Qt: {item.quantity}</span>
              <span>
                {formatPrice({ price: item.data.unitPrice, checkout: true })}
              </span>
            </CheckoutOrderItems>
          ))}
          <CheckoutOrderTotal>
            <div>
              <p>Total de itens</p>
              <span>{totalItems}</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>{formatPrice({ price: totalPrice, checkout: true })}</span>
            </div>
          </CheckoutOrderTotal>
          <CheckoutOrderButton type="submit" form="order">
            Confirmar pedido
          </CheckoutOrderButton>
        </CheckoutOrder>
      </div>
    </CheckoutContainer>
  );
}
