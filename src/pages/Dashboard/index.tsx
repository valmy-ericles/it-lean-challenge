import { LastPosts } from "../../components/Dashboard/LastPosts";
import { NewPostForm } from "../../components/Dashboard/NewPost";
import { Page } from "../../components/Page";
import { usePosts } from "../../hooks/usePosts"

const Dashboard = () => {
  const { posts, setPosts, loading, error } = usePosts('/posts')
  
  const removePostFromList = (id:number) => {
    const newList = posts.filter(post => post.id !== id)
    setPosts(newList)
  }

  const updatePostFromList = (post) => {
    const index = posts.findIndex(item => item.id === post.id)
    let copyList = [...posts]
    copyList[index] = post
    setPosts(copyList)
  }

  const addNewPostOnList = (post) => {
    setPosts((prev) => ([post, ...prev]))
  }
  
  return (
    <Page>
      <NewPostForm addNewPostOnList={addNewPostOnList}/>

      <LastPosts 
        posts={posts} 
        removePostFromList={removePostFromList}
        updatePostFromList={updatePostFromList}
      />
    </Page>
  )
}

export default Dashboard;