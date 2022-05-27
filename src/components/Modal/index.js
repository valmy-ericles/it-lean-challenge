import React from "react";
import {
  ModalBlock,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles";

export const Modal = ({ title, children, active, hideModal, size }) => {
  return (
    <>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer size={size}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
};
