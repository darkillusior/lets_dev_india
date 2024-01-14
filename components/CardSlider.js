
import React, { useState, useEffect, useRef } from "react";
let count = 0;
let slideInterval;
export default function CardSlider({img}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

//   const removeAnimation = () => {
    
//   };

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseenter", pauseSlider);
//     slideRef.current.addEventListener("mouseleave", startSlider);

//     startSlider();
//     return () => {
//       pauseSlider();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNextClick();
//     }, 5000);
//   };

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

  const handleOnNextClick = () => {
    count = (count + 1) % img?.length;
    setCurrentIndex(count);
   
  };
  const handleOnPrevClick = () => {
    const productsLength = img?.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
   
  };

  return (
   <div className="flex flex-col p-1">
    
   

    <div className="p-2   flex items-center" >
    
  
    
    <img  className="m-1 w-full h-64 rounded-lg " src={img?img[currentIndex]:""} alt="" />
    

    </div> 
   <div className="flex justify-center"> <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnPrevClick}> <img src="/left.png"></img>
    </button>
   <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnNextClick}><img src="/right.png"></img>
    </button>
    </div>
   </div>
 
 
    
  );
}