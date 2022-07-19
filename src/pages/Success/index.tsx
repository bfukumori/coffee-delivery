import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TimerIcon } from "../Home/styles";
import {
  DeliveryIcon,
  PaymentIcon,
  SuccessContainer,
  SuccessContent,
  SuccessContentCard,
} from "./style";

import successImg from "../../assets/success.png";

interface IOrder {
  address: string;
  address_number: string;
  address_complement?: string;
  address_neighborhood: string;
  city: string;
  state: string;
  payment: string;
}

export function Success() {
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const navigate = useNavigate();

  function getOrderFromLocalStorage() {
    const storedOrderAsJSON = localStorage.getItem(
      "@coffee-delivery:order-info-1.0.0"
    );
    if (storedOrderAsJSON) {
      const parsedOrder = JSON.parse(storedOrderAsJSON);
      setOrder(parsedOrder);
    } else {
      navigate("/", { replace: true });
    }
  }

  useEffect(() => {
    getOrderFromLocalStorage();
  }, []);

  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <SuccessContentCard>
          <div>
            <DeliveryIcon as={MapPin} weight="fill" />
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {order.address}, {order.address_number}
                  {order.address_complement
                    ? ` ${order.address_complement}`
                    : ""}
                </span>
              </p>
              <p>
                {order.address_neighborhood} - {order.city}, {order.state}
              </p>
            </div>
          </div>
          <div>
            <TimerIcon as={Timer} weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>
          <div>
            <PaymentIcon as={CurrencyDollar} weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p>{order.payment}</p>
            </div>
          </div>
        </SuccessContentCard>
      </SuccessContent>
      <img
        src={successImg}
        alt="Entregador com camiseta amarela e calça verde dirigindo uma motocicleta roxa com um pacote na garupa"
      />
    </SuccessContainer>
  );
}
