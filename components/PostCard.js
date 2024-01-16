import React from 'react'
import CardSlider from './CardSlider'

function PostCard({post}) {
 console.log(post,"post")

  return (
   
        
       <div className='flex relative z-10 border-4 border-cyan-600 rounded-lg flex-col bg-gray-800'>
          <div
        
        className="absolute -z-10 -left-0 -top-5 inset-0 rounded-lg   "
      >
        <div className=" h-5 blur-[5px]    bg-gradient-to-r  to-primary from-blue-400"></div>
        {/* <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div> */}
      </div>
       
       <div className={"flex py-1 border-b rounded-tl-lg "}>
      <div className=" flex  px-2 ">
        <img
          className=" rounded-full z-0  w-28 h-16   m-0.5   "
          src="/44753.jpg"
        />
      </div>
      <div className="flex  flex-col  p-0 w-full">
        <div className="flex justify-between h-6  ">
        {/* <Link href={`#`}>  */}
        <a className=" p-1  rounded-sm  font-semibold ">
            {post?.name ? post?.name : <>unknow</>}
            {post?.rookie ? (
              <span className=" p-1   text-xs font-semibold ">
                rookies
                {/* <Icon size="small" name="star" color="red" /> */}
                |
              </span>
            ) : post?.elite?(
<></>
            //   <Icon size="small" name="star" color="yellow" />
            ) : post?.core? (
                <></>
            //   <Icon size="small" name="star" color="blue" />
            ) : post?.dev?(
<></>
                // <Icon size="small" name="star" color="purple" />
            
            ):post?.admin&&<>
           
           {/* <Icon size="small" name="star" color="teal" /> */}
            </>
            }
          </a>
          {/* </Link> */}
         
        </div>
        <div className={` flex flex-wrap py-2 text-gray-200   break-normal justify-center font-extrabold  items-center `}>
          <p className="break-all font-bold text-xl ">{post.taskname}</p>
        </div>
        
      </div>
    </div>
        <main className='w-full max-h-[30rem] overflow-auto  scroll-m-1 '>
           
           {/* <Gallery  post={post} img={0}/> */}
           <div className="cursor-pointer gap-2 w-full flex sm:grid overflow-x-scroll grid-cols-2 md:grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto">
              {post?.picUrl?.map((img, index) => (
                <img
                  className="w-11/12  sm:w-full  rounded-3xl"
                  key={index}
                  src={img}
                  alt="PostImage"
                  centered
                  size="medium"
                />
              ))}
            </div>
            <pre  className="p-5 break-all text-gray-200 whitespace-pre-wrap bg-gray-700 bg-opacity-50 rounded-lg">
          {post?.text}
            </pre>
        </main>
        </div> 


  
  )
}

export default PostCard