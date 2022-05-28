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

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface LastPostsProps {
 posts: PostProps[];
 removePostFromList: (id:number) => void;
 updatePostFromList: (post:PostProps) => void;
}

export const LastPosts = ({ posts, removePostFromList, updatePostFromList }:LastPostsProps) => {
  const [postToView, setPostToView] = useState({} as PostProps)
  const [showViewPost, setShowViewPost] = useState(false)

  const [postIdToDelete, setPostIdToDelete] = useState<number>()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [postToEdit, setPostToEdit] = useState({} as PostProps)
  const [showEditModal, setShowEditModal] = useState(false)

  const handleViewClick = (post:PostProps) => {
    setPostToView(post)
    setShowViewPost(true)
  }

  const handleEidtClick = (post:PostProps) => {
    setPostToEdit(post)
    setShowEditModal(true)
  }

  const handleDeleteClick = (postId:number) => {
    setPostIdToDelete(postId)
    setShowDeleteModal(true)
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
                    <ActionButton color="#27D26B" onClick={() => handleViewClick(post)}>
                      Visualizar
                    </ActionButton>
                    <ActionButton color="#14181A" onClick={() => handleEidtClick(post)}>
                      Editar
                    </ActionButton>
                    <ActionButton color="#D22730" onClick={() => handleDeleteClick(post.id)}>
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
        title={`${postToView?.title?.slice(0.20)}...`}
        show={showViewPost}
        onClose={() => setShowViewPost(false)}
        post={postToView}
      />

      <EditPostModal 
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        postToEdit={postToEdit}
        updatePostFromList={updatePostFromList}
      />

      <DeletePostModal
        title="Excluir Post"
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        id={postIdToDelete}
        removePostFromList={removePostFromList}
      />
    </>
  )
}