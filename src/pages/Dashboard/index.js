import { LastPosts } from "../../components/Dashboard/LastPosts";
import { NewPostForm } from "../../components/Dashboard/NewPost";
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

  const updatePostFromList = (post) => {
    const index = lastPosts.findIndex(item => item.id === post.id)
    let copyList = [...lastPosts]
    copyList[index] = post
    setLastPosts(copyList)
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
        updatePostFromList={updatePostFromList}
      />
    </Page>
  )
}

export default Dashboard;