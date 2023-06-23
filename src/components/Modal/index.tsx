import React from 'react';
import * as S from "./styles";

interface ModalProps {
  open: boolean;
  setOpen: () => void;
  title: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen, title, image }) => {
  const closeModal = () => {
    setOpen();
  };

  return (
    // @ts-ignore
    <S.Modal open={open} toggle={closeModal}>
      <S.ModalContainer>
        <S.ModalContent>
          <S.Images src={image} alt="" />
          <S.ModalBody>
            <S.ModalHeader>
              <h1>{title}</h1>
            </S.ModalHeader>
          </S.ModalBody>
          <S.ModalButton>
            <button onClick={closeModal}>&times;</button>
          </S.ModalButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;