import React, { ReactNode } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles";

interface ModalProps {
  title: string;
  children: ReactNode;
  active: boolean;
  size?: string;
  hideModal: () => void;
}

export const Modal = ({ title, children, active, hideModal, size }: ModalProps) => {
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
