import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import styled from "styled-components";

interface CheckoutContainerProps {
  formIsHidden: boolean;
}

export const CheckoutContainer = styled.div<CheckoutContainerProps>`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;

  ${(props) =>
    props.formIsHidden
      ? { gridTemplateColumns: "1fr" }
      : { gridTemplateColumns: "3fr 2fr" }}

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const BaseWrapper = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const CheckoutForm = styled(BaseWrapper)`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const InputFieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.75rem;

  input {
    font-size: 0.875rem;
    line-height: 1.3;
    padding: 0.75rem;
    background-color: ${(props) => props.theme["gray-300"]};
    color: ${(props) => props.theme["gray-700"]};
    border: none;
    border-radius: 4px;
    outline-color: ${(props) => props.theme["yellow-700"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  & :nth-child(1) {
    width: 35%;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  & :nth-child(2) {
    width: 100%;
  }
  & :nth-child(3) {
    width: 35%;
    @media (max-width: 480px) {
      width: 50%;
    }
  }
  & :nth-child(4) {
    width: calc(65% - 0.75rem);
    @media (max-width: 480px) {
      width: calc(50% - 0.75rem);
    }
  }
  & :nth-child(5) {
    width: 35%;
  }
  & :nth-child(6) {
    width: 48%;
    @media (max-width: 480px) {
      width: 35%;
    }
  }
  & :nth-child(7) {
    width: calc(17% - 1.5rem);
    @media (max-width: 480px) {
      width: calc(30% - 1.5rem);
    }
  }
`;

export const CheckoutFormFieldSet = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    h2 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme["gray-800"]};
      line-height: 1.3;
    }

    p {
      margin-top: 2px;
      font-size: 0.875rem;
    }
  }
`;

export const MapPinIcon = styled(MapPinLine)`
  color: ${(props) => props.theme["yellow-700"]};
`;

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme["purple-500"]};
`;

export const BaseInput = styled.input`
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-700"]};
  border: none;
  border-radius: 4px;
  outline-color: ${(props) => props.theme["yellow-700"]};

  &::placeholder {
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    flex: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: ${(props) => props.theme["purple-300"]};
    border-color: ${(props) => props.theme["purple-500"]};
  }
`;

export const CreditCardIcon = styled(CreditCard)`
  color: ${(props) => props.theme["purple-500"]};
`;
export const BankIcon = styled(Bank)`
  color: ${(props) => props.theme["purple-500"]};
`;
export const MoneyIcon = styled(Money)`
  color: ${(props) => props.theme["purple-500"]};
`;

export const CheckoutHeading = styled.h2`
  font-family: "Baloo 2", cursive;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme["gray-800"]};
`;

export const CheckoutOrder = styled(BaseWrapper)`
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const EmptyCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  display: 100%;

  & :first-child {
    color: ${(props) => props.theme["gray-600"]};
  }

  a {
    margin-top: 2rem;
    text-decoration: none;
    display: block;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-500"]};
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;

export const CheckoutOrderItems = styled.div`
  display: flex;
  align-items: flex-start;

  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  gap: 1.25rem;
  padding-bottom: 2rem;

  & + & {
    padding-top: 2rem;
  }

  img {
    width: 4rem;
    height: 4rem;

    @media (max-width: 480px) {
      display: none;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 0.5rem;
  }

  span:first-of-type {
    font-size: 0.75rem;
    align-self: flex-start;
    margin: 0 auto;
  }

  span:last-child {
    font-weight: 700;
  }
`;

export const CheckoutOrderTotal = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & div:last-child {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
`;

export const FreeShippingFee = styled.span`
  font-style: italic;
  color: green;
`;

export const CheckoutOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-500"]};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;
