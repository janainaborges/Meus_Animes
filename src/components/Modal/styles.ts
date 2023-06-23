import styled from "styled-components";
interface Props{
    open: any
}
export const Modal = styled.div<Props>`
  position: fixed;
  left: 0;
  top: 0;
  display: ${(props) => (props.open === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.3);
  * {
    margin: 0;
    padding: 0;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  background-color: white;
  z-index: 10;
  border-radius: 0.25rem;
  * {
    margin: 0;
    padding: 0;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Images = styled.img`
  width: 40%;
`;

export const ModalHeader = styled.div`
  align-items: center;
  width: 100%;
  margin-bottom: 9px;
`;
export const ModalButton = styled.div`
  position: relative;
  top: -1rem;
  button {
    background-color: white;
    color: black;
    border: none;
    font-size: 2rem;
  }
`;