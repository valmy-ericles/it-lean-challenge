import { useEffect, useState } from "react";
import { api } from "../services/api"

export const usePosts = (url) => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await api.get(url)
          setPosts(response.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [url])

  return { posts, setPosts, error, loading }
}