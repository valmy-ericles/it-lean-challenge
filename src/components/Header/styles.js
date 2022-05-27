import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.25);

  img {
    cursor: pointer;
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;
  }

  img {
    height: 50px;
    cursor: pointer;
  }

  .avatar {
    border-radius: 50%;
    height: 30px;
    margin-right: 5px;
  }
`