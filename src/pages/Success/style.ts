import styled from "styled-components";
import { BaseIcon } from "../Home/styles";

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
    max-width: 100%;
  }
`;

export const SuccessContent = styled.div`
  width: 100%;

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
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  // Gradient border ***********
  position: relative;
  border: solid 1px transparent;
  background: ${(props) => props.theme["gray-100"]};
  background-clip: padding-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: inherit;
    margin: -1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme["yellow-700"]},
      ${(props) => props.theme["purple-500"]}
    );
    z-index: -1;
  }

  //*********** Gradient border

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

export const DeliveryIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme["purple-500"]};
`;

export const PaymentIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme["yellow-700"]};
`;
