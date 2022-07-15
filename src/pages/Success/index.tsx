import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { TimerIcon } from "../Home/styles";
import {
  DeliveryIcon,
  PaymentIcon,
  SuccessContainer,
  SuccessContent,
  SuccessContentCard,
} from "./style";

export function Success() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </SuccessContentCard>
      </SuccessContent>
      <img
        src="./src/assets/images/Success.png"
        alt="Entregador com camiseta amarela e calça verde dirigindo uma motocicleta roxa com um pacote na garupa"
      />
    </SuccessContainer>
  );
}
