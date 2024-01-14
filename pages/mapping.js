import React, { useState } from 'react'
import Link from 'next/link'
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import { parseCookies } from "nookies";
import Navbar from '@/components/Navbar'
import Card from '@/components/Card';
import Slider from '@/components/Slider';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
function Mapping({user,postsData}) {
  const[post,setPost]=useState(postsData||[])
  const[img,setImg]=useState(2)
const[slideIndex,setSlideIndex]=useState(2)
  const handleNextSlide = () => {
    // Limit slideIndex to be less than or equal to 20
    setSlideIndex(Math.min(slideIndex + 1, 20));
    console.log(slideIndex)
  };

  const handlePrevSlide = () => {
    // Limit slideIndex to be greater than or equal to 1
    setSlideIndex(Math.max(slideIndex - 1, 1));
    console.log(slideIndex)
  };
let arr= [post[img]?.a,post[img]?.b,post[img]?.c,post[img]?.d,post[img]?.e,post[img]?.f,post[img]?.g,post[img]?.h,post[img]?.i];

  const slides = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

  return (
   <>
    <Navbar user={user}/>
    
    <div className='bg-gray-900  pt-28 p-3'>
        {/* <section class=" pt-20 pb-10 lg:pt-[120px] w-3/4 flex min-w-full max-w-full overflow-x-auto lg:pb-20  "> */}
     
     
     
      <h1 className='text-center text-xl p-3'>Your Mapping Gallery</h1>
      <div className="container w-full mx-auto mt-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[9]}
              alt="Image 1"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[8]}
              alt="Image 2"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[7]}
              alt="Image 3"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>

     
            <div className="grid  sm:gap-4 gap-2 ">
              <div className="shadow shadow-slate-500 sm:p-4 p-1 flex justify-center items-center rounded-lg">
                <img
                  src={arr[6]}
                  alt="Image 4"
                  className="w-full h-20 sm:h-40 object-cover rounded-lg"
                />
              </div>
              <div className="shadow flex shadow-slate-500  sm:p-4 p-1  justify-center items-center rounded-lg">
                
                <img
                  src={arr[5]}
                  alt="Image 5"
                  className="w-full h-20 sm:h-40 object-cover rounded-lg "
                />
              </div>
            </div>
        

          <div className=" grid ">
            <img
              src="/images/location.jpg"
              className=" sm:m-auto sm:mt-auto mt-auto  m-auto p-1 sm:p-5 object-cover rounded-full"
            />
          </div>

         
            <div className="grid sm:gap-4 gap-2">
              <div className="shadow shadow-slate-500  sm:p-4 p-1 flex justify-center items-center rounded-lg">
                {" "}
                <img
                  src={arr[4]}
                  alt="Image 7"
                  className="w-full h-20 sm:h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="shadow shadow-slate-500 sm:p-4 p-1 flex  justify-center items-center rounded-lg">
                  <img
                    src={arr[3]}
                    alt="Image 8"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg "
                  />
                </div>
              </div>
            </div>
          

          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[2]}
              alt="Image 9"
              className="w-full h-20 sm:h-40    object-cover rounded-lg"
            />
          </div>
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[1]}
              alt="Image 10"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={arr[0]}
              alt="Image 11"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>


        <Slider slides={post} setImg={setImg} current={slideIndex} setCurrent={setSlideIndex}/>
      <div className='flex justify-around'>
      <button onClick={handlePrevSlide} className='cursor-pointer' >
       <a href={`#${slideIndex}`}>left</a> </button>
      <button onClick={handleNextSlide} className='cursor-pointer' >
       <a href={`#${slideIndex}`}>right</a> </button>
      </div>
    
    </div>
    </>
  )
}
export const getServerSideProps = async ctx => {
  try {
   
    const { token } = parseCookies(ctx);
    const { name } = ctx.query;
    const getFollowingData =name;
console.log(name,"lolpolo")
    const res = await axios.get(`${baseUrl}/api/task`, {
      headers: { Authorization: token },
      params: { getFollowingData }
      
    });

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Mapping