import { Card } from "../../components/Card";
import {
  CoffeePortfolioContainer,
  HeroBackground,
  HeroCartIcon,
  HeroCoffeeIcon,
  HeroPackageIcon,
  HeroTimerIcon,
} from "./styles";

import { HeroContainer, HeroContent, HeroImage } from "./styles";

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
              <HeroCartIcon size={16} weight="fill" />
              Compra simples e segura
            </li>
            <li>
              <HeroPackageIcon size={16} weight="fill" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <HeroTimerIcon size={16} weight="fill" />
              Entrega rápida e rastreada
            </li>
            <li>
              <HeroCoffeeIcon size={16} weight="fill" />O café chega fresquinho
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
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </CoffeePortfolioContainer>
    </>
  );
}
