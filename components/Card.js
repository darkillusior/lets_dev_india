import React from 'react'

function Card({index,setImg,img}) {

  return (
  <>

          {/* <div className="container mx-auto m-auto">
            <div className="-mx-4 flex flex-wrap"> */}
              {/* <div className="w-full px-4 md:w-1/3 xl:w-1/4"> */}
      <div className="sm:mb-10 mb-8 p-3 sm:p-4 w-full  sm:w-full  overflow-hidden rounded-lg bg-[#9bbcff]">
                  <img
                    src={img}
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-2 text-center sm:p-9 ">
                  
                    <p className="text-black font-bold sm:text-xl text-sm mb-2 ">
                     Task-{index}
                    </p>
                    <button onClick={()=>setImg(index)}
                      
                      className=" hover:border-primary hover:bg-primary sm:inline-block inline rounded-full border border-[#001b50] sm:py-1 py-1 px-4 sm:px-4 text-xs sm:text-xs sm:font-medium font-medium transition hover:text-white text-black "
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              {/* </div>              */}
            {/* </div>
          </div>
       */}
  </>
  )
}

export default Card