import styled from "styled-components";

type SizeProp = {
  size: string;
}

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(229, 229, 229, 0.79);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ size }: SizeProp) => 
    size === "sm" ? '224px' 
    : size === "md" ? '400px' 
    : size === "lg" ? '600px' : "224px"
  };
  max-width: ${({ size }: SizeProp) => 
    size === "sm" ? '290px' 
    : size === "md" ? '400px' 
    : size === "lg" ? '600px' : "290px"
  };
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #000000;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;