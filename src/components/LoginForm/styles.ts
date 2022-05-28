import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 440px;
  max-width: 442px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1rem 2rem 3rem;
  span {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`