import {
  DeliveryIcon,
  PaymentIcon,
  SuccessContainer,
  SuccessContent,
  SuccessContentCard,
  TimerIcon,
} from "./style";

export function Success() {
  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <SuccessContentCard>
          <div>
            <DeliveryIcon weight="fill" />
            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <TimerIcon weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>
          <div>
            <PaymentIcon weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </div>
          </div>
        </SuccessContentCard>
      </SuccessContent>
      <img src="./src/assets/images/Success.png" alt="" />
    </SuccessContainer>
  );
}
