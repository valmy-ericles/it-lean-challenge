import { LastPosts } from "../../components/Dashboard/LastPosts";
import { NewPostForm } from "../../components/Form/PostForm";
import { Header } from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header/>
      <NewPostForm/>
      <LastPosts/>
    </>
  )
}

export default Dashboard;