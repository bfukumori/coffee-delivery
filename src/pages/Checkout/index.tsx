import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AddOrRemoveToCart } from "../../components/AddOrRemoveToCart";
import { CartContext, initialValue } from "../../contexts/CartContex";
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

enum TypePayment {
  CREDIT = "Cartão de crédito",
  DEBIT = "Cartão de débito",
  MONEY = "Dinheiro",
}

export function Checkout() {
  const { cart, resetCart, totalItemsInCart, totalPriceInCart } =
    useContext(CartContext);
  const [cep, setCep] = useState("");
  const [shippingFee, setShippingFee] = useState(0);

  const { cepInfo, loading, error } = useCep(cep);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>({
    defaultValues: {
      address: "",
      address_number: "",
      address_complement: "",
      address_neighborhood: "",
      city: "",
      state: "",
      payment: "",
    },
  });

  const totalAmountPlusFee = totalPriceInCart + shippingFee;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (error) {
      return;
    }
    const orderJSON = JSON.stringify(data);

    localStorage.setItem("@coffee-delivery:order-info-1.0.0", orderJSON);
    reset();
    navigate("/success", { replace: true });

    localStorage.removeItem("@coffee-delivery:cart-state-1.0.0");

    resetCart(initialValue);
  };

  useEffect(() => {
    setValue("address", cepInfo.address);
    setValue("address_neighborhood", cepInfo.district);
    setValue("city", cepInfo.city);
    setValue("state", cepInfo.state);
  }, [cepInfo]);

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
                minLength: 8,
              })}
              placeholder="CEP"
              maxLength={8}
              onBlur={(e) => setCep(e.target.value)}
              required
            />
            <input {...register("address")} placeholder="Rua" />
            <input
              type="number"
              {...register("address_number", {
                required: true,
              })}
              placeholder="Número"
            />
            <input
              {...register("address_complement")}
              placeholder="Complemento"
            />
            <input
              {...register("address_neighborhood", { disabled: true })}
              placeholder="Bairro"
            />
            <input
              {...register("city", { disabled: true })}
              placeholder="Cidade"
            />
            <input
              {...register("state", { disabled: true })}
              placeholder="UF"
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
              value={TypePayment.CREDIT}
              required
            />
            <label htmlFor="credit">
              <CreditCardIcon size={16} />
              Cartão de crédito
            </label>

            <input
              {...register("payment")}
              type="radio"
              id="debit"
              value={TypePayment.DEBIT}
            />
            <label htmlFor="debit">
              <BankIcon size={16} />
              Cartão de débito
            </label>

            <input
              {...register("payment")}
              type="radio"
              id="money"
              value={TypePayment.MONEY}
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
