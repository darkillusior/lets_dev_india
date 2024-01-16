import  { useEffect, useState} from "react";

import axios from "axios";
import baseUrl from "../utils/baseUrl";



import InfiniteScroll from "react-infinite-scroll-component";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function PostNewtask({postsData,user}) {

  const [posts, setPosts] = useState(postsData||[]);

  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);
useEffect(() => {
  if(posts.length<0){
    setHasMore(false);
  }

  return () => {
   
  }
}, [posts])

 let postTask =true
  const fetchDataOnScroll = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/newtask/allnewtask`, {
        params: { pageNumber }
      });
  // console.log(res.data)
      if (res.data.length === 0) setHasMore(false);

      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };
  return (
    <div className="bg-gray-900"
    >
       <div className="pb-12">
     <Navbar user = {user} />
     </div>
       <Form postTask={postTask} user={user} setPosts={setPosts} task={"project"}/>
    <div className="grid md:grid-cols-2 grid-cols-1 px-2 py-10 w-full justify-center items-center  ">

              
     <InfiniteScroll
          hasMore={hasMore}
          next={fetchDataOnScroll}
          // loader={<PlaceHolderPosts />}
          // endMessage={<EndMessage />}
          dataLength={posts?.length}>
   {posts?.map(post => (
    <div className="w-full px-5 py-5  ">
       <PostCard post={post} setPosts={ setPosts}  user={user}/>
       {console.log("error")}
      </div>  

            ))}
   
</InfiniteScroll>

  </div>
  <Footer />
  </div>
  )
}

export const getServerSideProps = async ctx => {
  try {
   
    const res = await axios.get(`${baseUrl}/api/newtask/allnewtask`, {
      params: { pageNumber: 1 }
      
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};