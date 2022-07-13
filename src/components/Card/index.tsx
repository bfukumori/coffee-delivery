import { Coffee } from "../../assets/mock-data";
import { formatPrice } from "../../helper/formatPrice";
import { QuantityInput } from "../QuantityInput";
import { CardFooter, CardContainer, CardContent, CardPrice } from "./styles";

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <img src={coffee.img} alt="" />
        <div>
          {coffee.type.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CardContent>
      <CardFooter>
        <CardPrice>
          <span>R$ </span>
          {formatPrice(coffee.price)}
        </CardPrice>
        <QuantityInput />
      </CardFooter>
    </CardContainer>
  );
}
