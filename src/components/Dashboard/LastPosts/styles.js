import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem 1.5rem;
  max-width: 100vw;
  span {
    font-size: 24px;
    font-weight: 700;
  }

  .hide-mobile {
    @media(max-width: 576px) {
      display: none;
    }
  }
`

export const Table = styled.table`
  width: 100%;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  padding: 2px;

  tr {
    border-bottom: 1px solid black;
  }
`

export const Tr = styled.tr`
  
`

export const Th = styled.th`
  padding: 1rem 2rem;
  text-align: center;
  font-weight: 600;
`

export const Tbody = styled.tbody`
  tr {
    text-align: center;
    border-bottom: 1px solid black;
  }

  td {
    text-align: left;
    padding: 1rem 1.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }

  .action-buttons {
    text-align: center;
    margin: auto;
  }
`

export const Td = styled.td`

`

export const WrapTableButtons = styled.div`
  display: flex;
  
  button {
    margin: 0 0.5rem;
  }

  @media(max-width: 1024px) {
    flex-direction: column;

    button {
      margin: 0.2rem 0;
    }
  }
`