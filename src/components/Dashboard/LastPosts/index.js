import { useState } from "react"
import { ActionButton } from "../../Buttons/ActionButtons"
import { 
  WrapActionModalButtons, 
  Container, 
  Table, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td, 
  WrapTableButtons 
} from "./styles"

import { Modal } from "../../Modal"
import { ButtonDefault } from "../../Buttons/DefaultButton"
import { SpinnerCircular } from "spinners-react"
import { api } from "../../../services/api"
import { toast } from 'react-toastify';

export const LastPosts = ({ posts, removePostFromList }) => {
  const [loading, setLoading] = useState(false)
  const [postIdToDelete, setPostIdToDelete] = useState()

  function handleDeletePost(postId) {
    setPostIdToDelete(postId)
  }

  const deletePost = async (id) => {
    try {
      setLoading(true)
      await api.delete(`/posts/${id}`)
      
      setLoading(false)

      removePostFromList(id)

      setPostIdToDelete(null)

      toast.success("Post deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  return (
    <>
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
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td>{post.body}</Td>
                <Td className="action-buttons">
                  <WrapTableButtons>
                    <ActionButton color="#27D26B">
                      Visualizar
                    </ActionButton>
                    <ActionButton color="#14181A">
                      Editar
                    </ActionButton>
                    <ActionButton color="#D22730" onClick={() => handleDeletePost(post.id)}>
                      Deletar
                    </ActionButton>
                  </WrapTableButtons>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <Modal
        title="Excluir Post"
        active={!!postIdToDelete}
        hideModal={() => setPostIdToDelete(null)}
      >

        <WrapActionModalButtons>
          <ButtonDefault color="#14181A" onClick={() => setPostIdToDelete(null)}>
            Cancelar
          </ButtonDefault>
          <ButtonDefault color="#D22730" onClick={() => deletePost(postIdToDelete)}>
            { loading ? <SpinnerCircular size={30} color="white" secondaryColor="#D22730"/> : 'Deletar' }
          </ButtonDefault>
        </WrapActionModalButtons>
      </Modal>

    </>
  )
}