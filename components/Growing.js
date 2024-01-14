import React from 'react'
import Link from 'next/link'

function Growing() {
  return (
   <>
     

      <div className='cursor-pointer  sm:hover:scale-150 transition ease-in-out   duration-300  sm:w-1/4 sm:p-2 hover:p-1  sm:bg-slate-800 w-4/5 p-4  hover:bg-gradient-to-r  from-yellow-300 via-red-500 to-red-500 bg-slate-800 rounded-lg m-auto'>
          <Link href={'/cleaning'}>

              <img src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM='/>

          </Link>
          </div>
      
  
   </>
  )
}

export default Growing