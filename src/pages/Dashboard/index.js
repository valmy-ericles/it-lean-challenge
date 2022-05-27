import { LastPosts } from "../../components/Dashboard/LastPosts";
import { NewPostForm } from "../../components/PostForm";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Page } from "../../components/Page";

const Dashboard = () => {
  const [lastPosts, setLastPosts] = useState([])

  useEffect(() => {
    async function getLastPosts() {
      const response = await api.get('/posts')
      setLastPosts(response.data.slice(0,5))
    }

    getLastPosts()
  },[])


  const removePostFromList = (id) => {
    const newList = lastPosts.filter(post => post.id !== id)
    setLastPosts(newList)
  }

  const addNewPostOnList = (post) => {
    setLastPosts((prev) => ([post, ...prev]))
  }
  
  return (
    <Page>
      <NewPostForm addNewPostOnList={addNewPostOnList}/>

      <LastPosts 
        posts={lastPosts} 
        removePostFromList={removePostFromList}
      />
    </Page>
  )
}

export default Dashboard;