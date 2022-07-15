import { Card } from "../../components/Card";
import {
  CoffeePortfolioContainer,
  HeroBackground,
  CartIcon,
  CoffeeIcon,
  PackageIcon,
  TimerIcon,
  CoffeeCatalogue,
} from "./styles";

import { data } from "../../assets/mock-data";

import { HeroContainer, HeroContent, HeroImage } from "./styles";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroBackground />
        <HeroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <CartIcon as={ShoppingCartSimple} weight="fill" />
              Compra simples e segura
            </li>
            <li>
              <PackageIcon as={Package} weight="fill" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <TimerIcon as={Timer} weight="fill" />
              Entrega rápida e rastreada
            </li>
            <li>
              <CoffeeIcon as={Coffee} weight="fill" />O café chega fresquinho
              até você
            </li>
          </ul>
        </HeroContent>
        <HeroImage>
          <img
            src="./src/assets/images/Hero.png"
            alt="Imagem de um copo preto e branco de café com a escrita Coffee Delivery e um fundo amarelo com sementes e pó de café torrado"
          />
        </HeroImage>
      </HeroContainer>
      <CoffeePortfolioContainer>
        <h2>Nossos cafés</h2>
        <CoffeeCatalogue>
          {data.map((item) => (
            <Card key={item.id} coffee={item} />
          ))}
        </CoffeeCatalogue>
      </CoffeePortfolioContainer>
    </>
  );
}
