import React from 'react'

import { useState } from "react";
import { likePost,deletePost} from "../utils/postActions";
import Gallery from './Gallery';

function PostTask({post,user,setPosts}) {
  // const [likes, setLikes] = useState(post.likes);
  // const isLiked = likes.some(like => like.user === user._id);

  return (
    
        
       <div className={`flex shadow-card  flex-col z-10 border rounded-lg   0 relative bg-gradient-to-tr from-gray-900 via-tertiary to-gray-800 ${post.task==="task"?" border-gray-300 ":" border-yellow-300 "}`}>
          {/* <div onClick={() => likePost( post._id, user._id, setLikes, isLiked ? false : true)} className={`absolute right-5 flex justify-center shadow-inner shadow-black ${post.task==="task"?isLiked?"bg-gradient-to-tr shadow-white from-transparent to-blue-900":"bg-transparent ":isLiked?"bg-gradient-to-tr shadow-white from-transparent to-rose-400":"bg-transparent "} cursor-pointer top-3 h-8 rounded-lg w-20 `}>{isLiked?<>voted {likes.length}</>:<>vote {likes.length}</>}</div>
         <div  className='bg-red-400 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-2 py-1 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 absolute -right-1 -top-7 cursor-pointer' onClick={() => deletePost(post._id, setPosts)}> x</div>  */}
       <div
        
        className="absolute -z-10 -left-0  -top-5 inset-0   "
      >
        {/* <div className={` h-5 blur-[5px]    bg-gradient-to-r ${post.task==="task"? "to-gray-500 from-white":"to-yellow-200 from-amber-100"}`}></div> */}
        {/* <div className="blur-[106px] opacity-30 h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div> */}
      
      </div>
       <div className={`flex py-1  border-b border-gray-300 shadow shadow-gray-200  rounded-tl-lg `}>
      
      <div className=" flex  px-2 ">
        <img
          className=" rounded-full z-0  w-28 h-16   m-0.5   "
          src={post.userpicUrl}
         
            
        />
      </div>
      <div className="flex  flex-col  p-0 w-full">
        <div className="flex justify-between h-6  ">
        {/* <Link href={`#`}>  */}
        <p className=" p-1  rounded-sm  font-semibold ">
            {post?.name }
            {post?.rookies ? (
              <span className=" p-1   text-xs font-semibold ">
               - rookie
                {/* <Icon size="small" name="star" color="red" /> */}
                
              </span>
            ) : post?.elite?(
              <span className=" p-1   text-xs font-semibold ">
             elite
              {/* <Icon size="small" name="star" color="red" /> */}
              
            </span>
            //   <Icon size="small" name="star" color="yellow" />
            ) : post?.core? (
              <span className=" p-1   text-xs font-semibold ">
                core
                {/* <Icon size="small" name="star" color="red" /> */}
                
              </span>
            //   <Icon size="small" name="star" color="blue" />
            ) : post?.dev?(
               <span className=" p-1   text-xs font-semibold ">
            dev
            {/* <Icon size="small" name="star" color="red" /> */}
            
               </span>
                // <Icon size="small" name="star" color="purple" />
            
            ):post?.admin&& <span className=" p-1   text-xs font-semibold ">
          admin
            {/* <Icon size="small" name="star" color="red" /> */}
            
          </span>
            }
          </p>
          {/* </Link> */}
         
        </div>
        <div className={` flex flex-wrap py-2 text-gray-200   break-normal justify-center font-extrabold  items-center `}>
          <p className="break-all font-bold text-xl ">Taks Completed</p>
        </div>
        
      </div>
    </div>
        <main className='w-full h-[30rem] overflow-auto scroll-m-1 '>
           
           <Gallery  post={post} img={0}/>

        </main>
        </div> 


    
  )
}

export default PostTask