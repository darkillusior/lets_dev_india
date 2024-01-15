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
import Gallery from '@/components/Gallery';
function Mapping({user,postsData}) {
  
  const[post,setPost]=useState(postsData||[])
 
  const[img,setImg]=useState(0)
  console.log(post[img]?.img[9],"img ha ye")
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

  // const slides = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

  return (
   <>
    <Navbar user={user}/>
    
    <div className='bg-gray-900  pt-28 p-3'>
        {/* <section class=" pt-20 pb-10 lg:pt-[120px] w-3/4 flex min-w-full max-w-full overflow-x-auto lg:pb-20  "> */}
     
     
     
      <h1 className='text-center text-xl p-3'>Your Mapping Gallery</h1>
      
<Gallery  post={post[img]} />

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
    const res = await axios.get(`${baseUrl}/api/task/task`, {
      headers: { Authorization: token },
      params: { getFollowingData }
      
    });
     
    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Mapping