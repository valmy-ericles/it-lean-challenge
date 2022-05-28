import { useEffect, useState } from "react";
import { api } from "../services/api"

type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostResponse extends Array<PostType> {}

export const usePosts = (url:string) => {
  const [posts, setPosts] = useState<PostResponse>([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await api.get<PostResponse>(url)
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