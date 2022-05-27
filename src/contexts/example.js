import { createContext, useContext } from "react"
import { api } from "../services/api"

const PostContext = createContext({})

const PostsProvider = ({ children }) => {
  const getPosts = async () => {
    try {
      const response = await api.get('/posts')
      console.log(response)
      return { posts: response.data };
    } catch (err) {
      return err
    }
  }

  const createPost = async (title, body, userId) => {
    try {
      const response = await api.post('/posts', {
        title,
        body,
        userId,
      })
      return { response };
    } catch (err) {
      return err
    }
  }

  const deletePost = async (postId) => {
    try {
      const response = await api.delete(`/posts/${postId}`)
      return { response };
    } catch (err) {
      return err
    }
  }

  return (
    <PostContext.Provider
      value={{
        getPosts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

const usePosts = () => {
  const context = useContext(PostContext)
  return context;
}

export { usePosts, PostsProvider }