import { useState } from 'react'
import Mapping from '@/components/Mapping'


import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { HiSwitchHorizontal } from "react-icons/hi";

import Post from '@/components/Post'

import { FaHeart } from "react-icons/fa";
import Donation from '@/components/Donation'

let task=["0","1","2"]
let project=[]
export default function Home({user}) {
  const slides = [<Mapping type={"mapping"}/>, <Mapping type={"cleaning"} />, <Mapping type={"growing"} />]
  const [currentIndex, setCurrentIndex] = useState(0);
  const[list,setList]=useState("task")
let tasklist=list==="task"?task:project;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  
 const[showForm,setShowForm]=useState(false);
  const [showDonation, setShowDonation] = useState(false);
  return (
    <>
    <div>
      <Navbar user={user}/>
      <div className='bg-gray-900  pt-28 '>

        <div className='sm:w-4/5 sm:m-auto sm:p-3 sm:border sm:hidden sm:justify-evenly sm:bg-white w-full p-3 m-auto relative block group'>

          {slides[currentIndex]}

          <div className='block sm:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          <div className='block sm:hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

        </div>

        <div className='sm:w-4/5  sm:bg-slate-700  sm:pt-7 sm:pb-7 sm:p-3  sm:flex sm:justify-evenly  w-full p-3 m-auto relative group hidden rounded-md'>
          <Mapping type={"mapping"} />
          <Mapping type={"cleaning"}/>
          <Mapping type={"growing"} />
          {/* <h1 className='absolute font-extrabold  text-transparent bg-clip-text bg-gradient-to-b from-cyan-300  to-purple-400 text-3xl  left-0 -top-10'>Gallery :</h1> */}
        </div>

        <main className=' sm:m-8 m-1 h-full rounded-md p-3 mt-10 bg-gray-600 bg-opacity-50 '>
          
        <div className='flex justify-center items-center'>          
        <div onClick={() => { setList("task") }} className={`${list == 'task' ? 'font-bold text-3xl text-[#ffffff]    text-center  p-3' :'font-semibold text-sm text-white text-center tracking-wider  hover:scale-110 transition-all  cursor-pointer p-3  hover:text-[#eeff97]'} `}>Task List</div>

        
        
        <HiSwitchHorizontal className='' size={50}/>
        
         <div onClick={() => { setList("project") }} className={`${list == 'project' ? 'font-bold text-3xl  text-[#dcff2b]  text-center  p-3' :'font-semibold text-sm text-white text-center tracking-wider hover:scale-110 transition-all group cursor-pointer p-3 hover:text-[#ebff89]'} `}>
          Project List</div>

         </div>
        
          <div className='grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-3 '>
{tasklist.map((data,index)=>(
 <Link className=' rounded-xl' href={{ pathname: '/tasks', query: { name: data }, }}>

 <div href="#_" className="p-3 m-2  rounded-xl bg-gray-900 text-gray-200 font-bold text-xl text-center  overflow-hidden group  relative hover:bg-gradient-to-r  hover:from-[rgb(10,98,69)] hover:to-[rgb(16,185,129)]  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">

   <ul role="list" className=" h-full divide-y divide-gray-200 dark:divide-gray-700">
     <li className="">
       <div className="flex items-center space-x-3">
         <div className="flex-shrink-0">
           <img className="w-20 h-20 rounded-full" src="https://thumbs.dreamstime.com/z/people-clean-dirty-city-park-nature-save-ecology-rescue-young-volunteer-team-working-people-cleaning-dirty-city-park-nature-save-226221872.jpg" alt="Neil image" />
         </div>
         <div className="flex-1 ">
           <p className=" font-semibold text-gray-900 truncate dark:text-white">
             Task - {data}
           </p>

         </div>
         <span className={`inline-flex items-center  ${user?.time[index]?.completed?"text-green-300 bg-green-900":"text-rose-300 bg-rose-900"}   text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  `}>
           <span className={`w-2 h-2 mr-1 ${user?.time&&user?.time[index]?.completed?"bg-green-500":"bg-rose-500"} rounded-full`}></span>
          {user?.time&&user?.time[index]?.completed?<>completed</>:<>inprogress</>}
         </span>
       </div>
     </li>
    
   </ul>
   <span className="absolute right-0 w-1/3 h-64 -mt-28 transition-all duration-1000 transform translate-x-64 bg-white opacity-10 rotate-12 group-hover:-translate-x-[31rem] ease">
   </span>

 </div>

</Link>
))}
           


   
          </div>
          </main>

        {showForm && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-white  rounded-md shadow-md" style={{  width:"50%" }}>
              <Post setShowForm={setShowForm} />
            </div>
          </div>
        )}  

        {showDonation&&(
            <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center">            
              <div className="bg-white  rounded-md shadow-md" style={{ width: "30%" }} >
                <Donation setShowDonation={setShowDonation} />
              </div>
              </div>
        )}

        <div className='flex justify-end p-5'>
          <div className="relative p-5 cursor-pointer   px-6 py-3 font-bold text-white rounded-lg group" onClick={()=>{setShowForm(true)}}>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
            <span className="relative">Contribute Task</span>
          </div>
        </div>
     
 
      </div>
      </div>
      <div onClick={()=>{setShowDonation(true)}} className="fixed top-1/2 right-0 transform -translate-y-1/2 w-24 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-l-lg flex items-center justify-center text-white font-semibold text-sm shadow-lg cursor-pointer group transition-all ease-in-out hover:w-36">
        <div className="w-0 h-0 border-r-12 border-t-12 border-transparent border-solid border-yellow-100 transform rotate-45 -mr-1"></div>
        <span className="ml-3  ">Donate for a Cause</span>
        <span className="group-hover:block hidden text-xs p-2">Become a Contributor</span>
      </div>

 


    </>
  )
}

