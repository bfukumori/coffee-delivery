import styled from "styled-components";
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 0;
  position: relative;
`;

export const HeroBackground = styled.div`
  background: url("./src/assets/hero-background.svg") center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(80px);
  position: absolute;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
  }

  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
  }

  ul {
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 2.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

export const HeroImage = styled.div`
  display: block;
  max-width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeroCartIcon = styled(ShoppingCartSimple)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["yellow-700"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const HeroPackageIcon = styled(Package)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["gray-700"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const HeroTimerIcon = styled(Timer)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["yellow-500"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const HeroCoffeeIcon = styled(Coffee)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["purple-500"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const CoffeePortfolioContainer = styled.section`
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    justify-items: center;
    gap: 2rem;
  }

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
    margin-top: 2rem;
  }
`;
