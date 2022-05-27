import { useState } from "react"
import { ActionButton } from "../../Buttons/ActionButtons"
import { 
  Container, 
  Table, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td, 
  WrapTableButtons 
} from "./styles"

import { EditPostModal } from "../EditPost"
import { ViewPostModal } from "../ViewPost"
import { DeletePostModal } from "../DeletePost"

export const LastPosts = ({ posts, removePostFromList, updatePostFromList }) => {
  const [postToView, setPostToView] = useState()
  const [postIdToDelete, setPostIdToDelete] = useState()
  const [postToEdit, setPostToEdit] = useState()

  return (
    <>
      <Container>
        <span>Ultimos Posts</span>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
              <Th className="hide-mobile">Descrição</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td className="hide-mobile">{post.body}</Td>
                <Td className="action-buttons">
                  <WrapTableButtons>
                    <ActionButton color="#27D26B" onClick={() => setPostToView(post)}>
                      Visualizar
                    </ActionButton>
                    <ActionButton color="#14181A" onClick={() => setPostToEdit(post)}>
                      Editar
                    </ActionButton>
                    <ActionButton color="#D22730" onClick={() => setPostIdToDelete(post.id)}>
                      Deletar
                    </ActionButton>
                  </WrapTableButtons>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <ViewPostModal
        title={`${postToView?.title.slice(0.20)}...`}
        show={!!postToView}
        onClose={() => setPostToView()}
        post={postToView}
      />

      <EditPostModal 
        show={!!postToEdit}
        onClose={() => setPostToEdit()}
        postToEdit={postToEdit}
        updatePostFromList={updatePostFromList}
      />

      <DeletePostModal
        title="Excluir Post"
        show={!!postIdToDelete}
        onClose={() => setPostIdToDelete()}
        id={postIdToDelete}
        removePostFromList={removePostFromList} 
      />
    </>
  )
}