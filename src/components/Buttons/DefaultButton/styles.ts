import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;

  border-radius: 10px;
  text-transform: uppercase;
  line-height: 26px;

  color: white;
  background-color: ${({ color }) => color };
  cursor: pointer;

  img {
    margin-right: 2rem;
  }
`
