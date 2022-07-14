import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutForm = styled.form`
  background-color: #eee;
`;

export const CheckoutOrder = styled.div`
  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const CheckoutOrderWrapper = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
`;

export const CheckoutOrderItems = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  gap: 1.25rem;
  padding-bottom: 2rem;

  & + & {
    padding-top: 2rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 700;
    margin-left: auto;
    align-self: flex-start;
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
`;
