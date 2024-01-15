import React from 'react'

function Gallery({post,img}) {
  return (
    <div className="container w-full mx-auto mt-10">
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[9]}
          alt="Image 1"
          className="w-full h-20 sm:h-40 object-cover rounded-lg"
        />
      </div>
      <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[8]}
          alt="Image 2"
          className="w-full h-20 sm:h-40 object-cover rounded-lg"
        />
      </div>
      <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[7]}
          alt="Image 3"
          className="w-full h-20 sm:h-40 object-cover rounded-lg"
        />
      </div>

 
        <div className="grid  sm:gap-4 gap-2 ">
          <div className="shadow shadow-slate-500 sm:p-4 p-1 flex justify-center items-center rounded-lg">
            <img
              src={post.img[6]}
              alt="Image 4"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className="shadow flex shadow-slate-500  sm:p-4 p-1  justify-center items-center rounded-lg">
            
            <img
              src={post.img[5]}
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
              src={post.img[4]}
              alt="Image 7"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="shadow shadow-slate-500 sm:p-4 p-1 flex  justify-center items-center rounded-lg">
              <img
                src={post.img[3]}
                alt="Image 8"
                className="w-full h-20 sm:h-40 object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      

      <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[2]}
          alt="Image 9"
          className="w-full h-20 sm:h-40    object-cover rounded-lg"
        />
      </div>
      <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[1]}
          alt="Image 10"
          className="w-full h-20 sm:h-40 object-cover rounded-lg"
        />
      </div>
      <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
        <img
          src={post.img[0]}
          alt="Image 11"
          className="w-full h-20 sm:h-40 object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
  )
}

export default Gallery