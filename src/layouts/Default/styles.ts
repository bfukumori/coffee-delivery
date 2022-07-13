import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 10rem;

  @media (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 5rem;
  }
`;
