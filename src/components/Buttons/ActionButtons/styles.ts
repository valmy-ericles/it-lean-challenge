import styled from "styled-components"

export const Button = styled.button`
  width: 80px;
  padding: 0.5rem 0.7rem;
  background-color: ${({ color }) => color};
  color: white;
  text-align: center;
  border-radius: 30px;

  font-weight: 400;
  line-height: 15px;

  cursor: pointer;
`