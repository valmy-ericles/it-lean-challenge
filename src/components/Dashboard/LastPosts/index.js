import { Container, Table, Thead, Tr, Th, Tbody, Td } from "./styles"

export const LastPosts = () => {
  return (
    <Container>
      <span>Ultimos Posts</span>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Título</Th>
            <Th>Descrição</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Description Lorem ipsum</Td>
            <Td>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim</Td>
            <Td>d</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>Description Lorem ipsum</Td>
            <Td>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim</Td>
            <Td>d</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>Description Lorem ipsum</Td>
            <Td>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim</Td>
            <Td>d</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>Description Lorem ipsum</Td>
            <Td>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim</Td>
            <Td>d</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  )
}