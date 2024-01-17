import React from 'react'

function FutureGoles() {
  return (
        
        <div className="divide-y divide-gray-200 p-10 sm:px-20 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          We want to build an organization to help India develop. We plan to create a rank-based system to manage this organization, where individuals who complete more tasks will attain higher ranks. These tasks may encompass activities such as cleaning, tree planting, and solar plant construction. I understand it's a significant dream, but with collective effort, we can accomplish it
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <p className='text-3xl' >
                        Future Plans
                    </p>
              <li  className="py-12">
              
                  <div className="space-y-2  xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                   
                    <div className="space-y-5 py-4 xl:col-span-3">
                      <div className="space-y-6">
                          <div className="flex flex-wrap">
                          1.  Machile Learning Model
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        We will be utilizing machine learning to authenticate and detect images or videos to verify the completion of tasks.
                        </div>
                      </div>
                      <div className="space-y-5 py-4 xl:col-span-3">
                      <div className="space-y-6">
                          <div className="flex flex-wrap">
                           2. Add Map
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        Additionally, we plan to incorporate a map feature to showcase real-time progress of our work to the world. This map will continually update with both old and new images, providing a dynamic visual representation of our ongoing initiatives.
                        </div>
                      </div>
                      <div className="space-y-5 py-4 xl:col-span-3">
                      <div className="space-y-6">
                          <div className="flex flex-wrap">
                           3. Add Shop
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        We intend to introduce a dedicated shop where individuals can purchase equipment specifically designed for cleaning and planting purposes. These items will be distributed based on the respective ranks achieved by participants, creating a system that rewards and supports their commitment to our initiatives
                        </div>
                      </div>  
                      <div className="space-y-5 py-4 xl:col-span-3">
                      <div className="space-y-6">
                          <div className="flex flex-wrap">
                           4.Credit System
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        We are considering implementing a credit system that allows individuals to earn money based on their ranks. Alternatively, participants may receive a minimum salary commensurate with the type and volume of work or tasks they complete. This approach ensures fair compensation and recognition for the efforts contributed to our collective goals.
                        </div>
                      </div>  
                  </div>
                  
               
              </li>
          
        </ul>
      </div>        
       
 
  )
}

export default FutureGoles