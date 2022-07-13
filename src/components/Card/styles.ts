import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 3.375rem;
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 1.25rem 1.5rem;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
  }

  span {
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${(props) => props.theme["yellow-700"]};
    background-color: ${(props) => props.theme["yellow-300"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const CardFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const CardPrice = styled.div`
  font-family: "Baloo 2", cursive;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.3;
  margin-right: auto;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
