import styled from "styled-components"

export const Container = styled.div`
  padding: 2rem 1.5rem;

  span {
    font-size: 24px;
    font-weight: 700;
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
    border-bottom: 1px solid black;
  }

  td {
    text-align: left;
    padding: 1rem 1.5rem;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
`

export const Td = styled.td`

`