import styled from "styled-components";

export const AddOrRemoveToCartContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
`;

export const QuantityButton = styled.button`
  color: ${(props) => props.theme["purple-500"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme["gray-200"]};
  background-color: ${(props) => props.theme["purple-700"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["purple-500"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const RemoveFromCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme["gray-700"]};
  font-size: 0.75rem;
  text-transform: uppercase;
  background-color: ${(props) => props.theme["gray-400"]};

  & :first-child {
    color: ${(props) => props.theme["purple-500"]};
    margin-right: 0.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;
