import { MapPin } from "phosphor-react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;
    margin-left: auto;
    margin-right: 0.5rem;

    background-color: ${(props) => props.theme["purple-300"]};

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["purple-700"]};
    }
  }
`;

export const MapIcon = styled(MapPin)`
  color: ${(props) => props.theme["purple-500"]};
`;
