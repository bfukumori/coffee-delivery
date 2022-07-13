import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import styled from "styled-components";

export const QuantityInputContainer = styled.form`
  display: flex;
  gap: 0.5rem;

  div {
    width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 0.5rem;
    border-radius: 6px;
  }
`;

export const MinusIcon = styled(Minus)`
  color: ${(props) => props.theme["purple-500"]};
  cursor: pointer;
`;

export const PlusIcon = styled(Plus)`
  color: ${(props) => props.theme["purple-500"]};
  cursor: pointer;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${(props) => props.theme["purple-700"]};

  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;

export const QuantityInputCartIcon = styled(ShoppingCartSimple)`
  color: ${(props) => props.theme["gray-200"]};
  cursor: pointer;
`;
