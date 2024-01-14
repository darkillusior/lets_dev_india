// import Navbar from '@/Component/Navbar'
import Navbar from '@/components/Navbar'
import React from 'react'
import ProfileUpdateModel from '@/components/ProfileUpdateModel'
const profile = ({user}) => {
  return (
    <div className='bg-white dark:bg-gray-900'>
 
<main className="flex flex-col gap-10">
  <div>
  <Navbar user={user}/>
  </div>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words profile-page bg-translation w-full mb-6 shadow-xl rounded-lg pt-4 sm:pt-8">
        <div className="px-6">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={user. userimg} className="shadow-xl rounded-full w-96 h-64  align-middle border-none mt-1 " />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center text-center">
              <div className="py-6 px-3 mt-2 sm:mt-0">
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Rank
                </button>
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 mx-2 sm:mx-0" type="button">
                  pending
                </button>
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  ratings
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">22</span><span className="text-sm text-white">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">10</span><span className="text-sm text-white">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">89</span><span className="text-sm text-white">Comments</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="text-center mt-12">
          {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center text-center"> */}
              <div className="py-6 px-3 mt-2 sm:mt-0">
                <ProfileUpdateModel />
              </div>
            {/* </div> */}
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-white">
            {user.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
             {user?.city}
            </div>
            {/* <div className="mb-2 text-white mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-white"></i>Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-white">
              <i className="fas fa-university mr-2 text-lg text-white"></i>University of Computer Science
            </div> */}
          </div>
        
        </div>
      </div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg flex items-center justify-center">
    <table class="w-4/6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                     Username
                </th>
                <th scope="col" class="px-6 py-3">
                    RAnks
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Kamal
                </th>
                <td class="px-6 py-4">
                    1
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Anshul
                </th>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Gaurav
                </th>
                <td class="px-6 py-4">
                    3
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Rahul
                </th>
                <td class="px-6 py-4">
                    4
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Pankaj
                </th>
                <td class="px-6 py-4">
                    5
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
   
  </section>
</main>
  </div>
  )
}

export default profile