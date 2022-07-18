import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AddOrRemoveToCart } from "../../components/AddOrRemoveToCart";
import { CartContext } from "../../contexts/CartContex";
import { formatPrice } from "../../helper/formatPrice";
import { useCep } from "../../hooks/useCep";
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
  FreeShippingFee,
  EmptyCheckout,
} from "./styles";

interface IFormInput {
  cep: string;
  address: string;
  address_number: string;
  address_complement: string;
  address_neighborhood: string;
  city: string;
  state: string;
  payment: string;
}

export function Checkout() {
  const { cart, totalItemsInCart, totalPriceInCart } = useContext(CartContext);
  const [cep, setCep] = useState("");
  const [shippingFee, setShippingFee] = useState(0);

  const { cepInfo, loading } = useCep(cep);

  const totalAmountPlusFee = totalPriceInCart + shippingFee;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <CheckoutContainer formIsHidden={cart.items.length === 0}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="order"
        hidden={cart.items.length === 0}
      >
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
            <input
              {...register("cep", {
                value: cep,
                onBlur: (e) => setCep(e.target.value),
              })}
              placeholder="CEP"
            />
            <input
              {...register("address", {
                value: cepInfo.address,
              })}
              placeholder="Rua"
            />
            <input {...register("address_number")} placeholder="Número" />
            <input
              {...register("address_complement")}
              placeholder="Complemento"
            />
            <input
              {...register("address_neighborhood", {
                value: cepInfo.district,
              })}
              placeholder="Bairro"
            />
            <input
              {...register("city", {
                value: cepInfo.city,
              })}
              placeholder="Cidade"
            />
            <input
              {...register("state", {
                value: cepInfo.state,
              })}
              placeholder="UF"
              maxLength={2}
            />
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
              {...register("payment", {
                required: "Escolha um método de pagamento",
              })}
              type="radio"
              id="credit"
              value="CREDIT"
            />
            <label htmlFor="credit">
              <CreditCardIcon size={16} />
              Cartão de crédito
            </label>

            <input
              {...register("payment", {
                required: "Escolha um método de pagamento",
              })}
              type="radio"
              id="debit"
              value="DEBIT"
            />
            <label htmlFor="debit">
              <BankIcon size={16} />
              Cartão de débito
            </label>

            <input
              {...register("payment", {
                required: "Escolha um método de pagamento",
              })}
              type="radio"
              id="money"
              value="MONEY"
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
        {cart.items.length === 0 ? (
          <CheckoutOrder>
            <EmptyCheckout>
              <ShoppingCart size={48} />
              <p>Seu carrinho está vazio.</p>
              <p>Que tal adicionar alguns deliciosos cafés?</p>
              <Link to="/">Ir para o catálogo</Link>
            </EmptyCheckout>
          </CheckoutOrder>
        ) : (
          <CheckoutOrder>
            {cart.items.map((item) => (
              <CheckoutOrderItems key={item.id}>
                <img src={item.img} alt={item.description} />
                <div>
                  <h3>{item.title}</h3>
                  <AddOrRemoveToCart itemId={item.id} isCheckout />
                </div>
                <span>Qt: {item.quantity}</span>
                <span>
                  {formatPrice({ price: item.unitPrice, checkout: true })}
                </span>
              </CheckoutOrderItems>
            ))}
            <CheckoutOrderTotal>
              <div>
                <p>Total de itens</p>
                <span>{totalItemsInCart}</span>
              </div>
              <div>
                <p>Entrega</p>
                {shippingFee === 0 ? (
                  <FreeShippingFee>free</FreeShippingFee>
                ) : (
                  <span>
                    {formatPrice({
                      price: shippingFee,
                      checkout: true,
                    })}
                  </span>
                )}
              </div>
              <div>
                <p>Total</p>
                <span>
                  {formatPrice({ price: totalAmountPlusFee, checkout: true })}
                </span>
              </div>
            </CheckoutOrderTotal>
            <CheckoutOrderButton
              type="submit"
              form="order"
              disabled={cart.items.length === 0}
            >
              Confirmar pedido
            </CheckoutOrderButton>
          </CheckoutOrder>
        )}
      </div>
    </CheckoutContainer>
  );
}
