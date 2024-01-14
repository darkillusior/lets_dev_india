import Link from 'next/link'
import React from 'react'

function Mapping({type}) {
  return (
   <>
   
       <div className='cursor-pointer  sm:hover:scale-125 transition ease-in-out   duration-300  sm:w-1/4 sm:p-2   sm:bg-slate-800 w-4/5 p-4  hover:bg-gradient-to-r  from-yellow-300 via-red-500 to-red-500 bg-slate-800 rounded-lg m-auto'>
        <Link  href={{ pathname:`/mapping`, query: { name: type }, }}>
             {type==="mapping"&&<img src='https://www.planet.com/static/1fa65bb2083dc731d903d5e10072f3f8/2d264/mapping-hero%403x.jpg'/>} 
             {type==="cleaning"&&  <img className='' src='https://img.freepik.com/premium-vector/children-collect-garbage-kids-cleaning-park-trash-boys-girls-sort-waste-save-nature-volunteers-clean-up-plastic-pollution-protection-ecology-care-save-earth-vector-cartoon-concept_176411-3823.jpg'/> } 
              {type==="growing"&&<img src='https://media.istockphoto.com/id/639426686/photo/asian-little-girl-helping-his-father-to-plant-the-tree.jpg?s=612x612&w=0&k=20&c=PdhVJdR7jnM7VqRuW-JZXuva5jhBa0zqUPy_aGVvgbM='/>}
      
      </Link>  
      <h1 className='w-full flex justify-center items-center'>{type}</h1>
          </div>
 
   </>
  )
}

export default Mapping