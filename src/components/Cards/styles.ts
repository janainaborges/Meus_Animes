import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: row;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`
export const ButtonLike = styled.button `
  width: 40px;
  text-align: center;
  position: relative;
  top: 40%;
  left: 40%;
  background: none;
  border: none;
`

export const Content = styled.h1`
  margin: 20px;
`;
export const Title = styled.h1`
  min-height: 4rem;
  font-size: 1rem;
`;
export const Image = styled.div`
  img {
    height: 15rem;
  }
`;

