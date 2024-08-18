import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Content = styled.button`
  padding: 8px;
  color: white;
  background: black;
  border-radius: 8px;
  border: 1px solid white;
  min-height: 40px;
  min-width: 100px;

  &:hover {
    transition: all 0.5s;
    color: black;
    background: white;
  }
`;
