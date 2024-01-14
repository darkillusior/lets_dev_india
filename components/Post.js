import React from 'react'

function Post({setShowForm}) {
  return (
   <>
          <div class="flex justify-center items-center   ">
            <div class="w-full  rounded shadow-2xl p-5 m-4">
                
            <div onClick={()=>{setShowForm(false)}}>
            <img className='w-8 cursor-pointer' src="/images/back_arrow_icon.svg" alt="" />
            </div>
            
            <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Task</h1>
           
            <form action="/" method="post">
                <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Task Name</label>
                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name"/>
                </div>
                <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Task Description</label>
                <textarea class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
                </div>
                <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Instruction</label>
                <input class="border py-2 px-3 text-grey-800" placeholder='Ensure good lighting for better image quality.'/>
               
                </div>
                <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="password">Instruction</label>
                <input class="border py-2 px-3 text-grey-800" placeholder='Take photos from an appropriate height for a clear view.'/>
               </div>

               <div className='flex flex-col mb-4'>
                 <label class="mb-2 mt-2 font-bold text-lg text-gray-900" for="email">Add Demo Image(s)</label>
                <input class="border py-2 px-3 text-grey-800" type='file' placeholder='Ensure good lighting for better image quality.'/>
               </div>
               <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Post For Review</button>
               </form>
                 
              </div>
             </div>
     </>
)
}

export default Post