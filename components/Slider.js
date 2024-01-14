import React, { useState, useRef } from 'react'
import Card from './Card'
import Track from './Track'
import { useHorizontalScroll }  from "./SideScrole";
function Slider({slides,current,setCurrent,setImg}) {
  const scrollRef = useHorizontalScroll();
   const[selected,setSelected]=useState(current)
  return (
   <>
   <div ref={scrollRef} className='w-full relative overflow-x-scroll rounded-lg hover:bg-gradient-to-b from-gray-700 to-transparent  '>
    {/* <Track current={current}> */}
    <ul className='flex  relative list-none  md:mr-40 md:w-auto  md:p-10 p-5 w-3/4'>
     
      {slides.map((item,index)=>(
        
          <li id={index}  onClick={()=>{setCurrent(index);setImg(item.index)}}
         className={`${current === index ? ' p-4 min-w-full  max-w-full  px-4 md:min-w-[50%] xl:min-w-[25%] md:max-w-[50%] xl:max-w-[25%] m-5 transition-all ease-out duration-300 scale-125' :'p-4 min-w-full max-w-full  px-4 md:min-w-[33%] xl:min-w-[25%] sm:max-w-[33%]  xl:max-w-[25%] m-5 cursor-pointer opacity-30  transition-all ease-out duration-300 hover:scale-110'} `}>
          <Card index={item.index} img={item.a} setImg={setImg} />
          </li>
          ))
          } 
     
    </ul>
    {/* </Track> */}
   </div>
   </>
   
  )
}

export default Slider