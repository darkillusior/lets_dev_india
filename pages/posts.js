
import  { useState} from "react";

import axios from "axios";
import baseUrl from "../utils/baseUrl";

import cookie from "js-cookie";
import { parseCookies } from "nookies";

// import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "@/components/PostCard";


export default function Posts({postsData,user}) {

  const [posts, setPosts] = useState(postsData||[]);

  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

 
//   const fetchDataOnScroll = async () => {
//     try {
//       const res = await axios.get(`${baseUrl}/api/task`, {
//         headers: { Authorization: cookie.get("token") },
//         params: { pageNumber }
//       });
  
//       if (res.data.length === 0) setHasMore(false);

//       setPosts(prev => [...prev, ...res.data]);
//       setPageNumber(prev => prev + 1);
//     } catch (error) {
//       alert("Error fetching Posts");
//     }
//   };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-2 py-10 w-full justify-center items-center bg-gray-900 ">

     {/* <InfiniteScroll
  
          hasMore={hasMore}
          next={fetchDataOnScroll}
          loader={<PlaceHolderPosts />}
          endMessage={<EndMessage />}
          dataLength={posts.length}> */}
   {posts?.map(post => (
    <div className="w-full px-5 py-5  ">
       <PostCard post={post}/>
      </div>  

            ))}
   
{/* </InfiniteScroll> */}

  </div>
  )
}

export const getServerSideProps = async ctx => {
  try {
   
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseUrl}/api/task/post`, {
      headers: { Authorization: token },
      // params: { pageNumber: 1 }
      
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};