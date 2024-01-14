import React from 'react'
import Link from 'next/link'

function Cleaning() {
  return (
    <>
      
 <div className='cursor-pointer  sm:hover:scale-150 transition ease-in-out   duration-300  sm:w-1/4 sm:p-2 hover:p-1  sm:bg-slate-800 w-4/5 p-4  hover:bg-gradient-to-r  from-yellow-300 via-red-500 to-red-500 bg-slate-800 rounded-lg m-auto'>

        <Link href={'/growing'}>
              <img className='' src='https://img.freepik.com/premium-vector/children-collect-garbage-kids-cleaning-park-trash-boys-girls-sort-waste-save-nature-volunteers-clean-up-plastic-pollution-protection-ecology-care-save-earth-vector-cartoon-concept_176411-3823.jpg'/>  
        </Link>  
        </div>
       
  
    
    </>
  )
}

export default Cleaning