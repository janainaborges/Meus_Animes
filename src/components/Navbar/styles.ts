import styled from "styled-components";

import { ImQuill } from "react-icons/im";

export const SHeaderFixed = styled.nav`
  position: fixed;
  height: 64px;
  left: 0;
  right: 0;
  top: 0;
  height: 64px;
  background: white;
  z-index: 10;
  border-bottom: 2px solid #f1f1f1;
`;

export const SHeader = styled.header`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  transition: 0.3s ease padding;
  padding: 0 16px;
  @media (max-width: 48em) {
    padding: 0 32px;
  }
  > div {
    flex: 1;
  }
`;

export const SLeft = styled.div`
  display: flex;
  color: #ccc;

  @media (max-width: 748px) {
    position: absolute;
    left: 44%;
  }
  @media (max-width: 427px) {
  }
`;

export const SCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 48em) {
    position: absolute;
    right: 2%;
  }
`;

export const SRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  input{
    border: none;
    outline: none !important;
    border-radius: 5px;
    width: 15.06rem;
    height: 2.45rem;
    background-color: #0F69AA;
  }
`;

export const SArrowIcon = styled(ImQuill)`
  display: flex;
  margin-left: 4px;
`;