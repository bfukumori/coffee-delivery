import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import styled from "styled-components";

export const SuccessContainer = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;
  align-items: end;

  @media (max-width: 976px) {
    margin-top: 2.5rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  img {
    flex: 1;
  }
`;

export const SuccessContent = styled.div`
  width: 100%;
  flex: 1;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme["yellow-700"]};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const SuccessContentCard = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: solid 1px red;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  & :not(& :first-child) div p + p,
  p span {
    font-weight: 700;
  }
`;

export const DeliveryIcon = styled(MapPin)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["purple-500"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["yellow-500"]};
  min-width: 2rem;
  min-height: 2rem;
`;

export const PaymentIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme["gray-100"]};
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["yellow-700"]};
  min-width: 2rem;
  min-height: 2rem;
`;
