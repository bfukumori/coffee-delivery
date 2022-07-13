import { QuantityInput } from "../QuantityInput";
import { CardFooter, CardContainer, CardContent, CardPrice } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <CardContent>
        <img src="./src/assets/images/Expresso.png" alt="" />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardContent>
      <CardFooter>
        <CardPrice>
          <span>R$ </span>
          9,90
        </CardPrice>
        <QuantityInput />
      </CardFooter>
    </CardContainer>
  );
}
