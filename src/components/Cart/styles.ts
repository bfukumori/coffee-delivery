import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${(props) => props.theme["yellow-300"]};

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

export const CartIcon = styled(ShoppingCartSimple)`
  color: ${(props) => props.theme["yellow-700"]};
`;
