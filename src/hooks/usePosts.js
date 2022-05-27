import { api } from "../services/api"

const getPosts = async () => {
  try {
    const response = await api.get('/posts')
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

export function usePosts() {
  return { getPosts, createPost, deletePost }
}
