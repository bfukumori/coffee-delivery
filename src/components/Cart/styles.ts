import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CartContainerProps {
  main?: boolean;
}

export const CartContainer = styled(Link)<CartContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) =>
    props.main ? props.theme["yellow-300"] : props.theme["purple-700"]};

  &:hover {
    background-color: ${(props) =>
      props.main ? "" : props.theme["purple-500"]};
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;
    height: 1.25rem;
    padding: 0.5rem;
    border-radius: 9999px;

    font-weight: 700;
    font-size: 0.75rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;

export const CartIcon = styled(ShoppingCartSimple)<CartContainerProps>`
  color: ${(props) =>
    props.main ? props.theme["yellow-700"] : props.theme["gray-200"]};
`;
