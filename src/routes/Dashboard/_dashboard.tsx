import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  display: flex;
`;

export const LeftWrapper = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 10%;
  padding: 16px;
  border-right: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-direction: column;

  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  filter: grayscale(100%);
  background: white;
  border-radius: 20px;

  &:hover {
    transition: filter 1s;
    filter: grayscale(0);
  }

  > img {
    height: 80px;
    width: 80px;
  }
`;

export const RightWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin-left: 10%;
  // background: green;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
