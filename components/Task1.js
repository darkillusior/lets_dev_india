import React from "react";
import Link from "next/link";
import Form from "./Form";
const Task1 = ({ user }) => {
  return (
    
    <div className="bg-white  dark:bg-gray-900">
      <div className="px-2 md:px-4 pt-16">
        <div className="md:w-11/12 w-full mx-auto bg-white rounded-lg shadow-lg p-2 md:p-8">
          <div className="pb-10">
            <Link href="/main">
              <img
                className="w-8 cursor-pointer"
                src="/images/back_arrow_icon.svg"
                alt=""
              />
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Identify Nearest Priority Areas:
            </h1>
            <p className="mb-4 text-gray-700 font-semibold">
              Inspect your neighnour area ( around your residence) and click
              different images from different directions to confirm about your
              nearest cleaning priority.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              1. Instructions:{" "}
            </h2>

            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-amber-600">entance</span> of
                your house/building, take 3 images of the front view .Note that
                each image should contain the view after the previous image with
                some overlaped part of previous image. Overlaping should be done
                keeping in mind the amount of view left to cover.(If the
                reamaining view is less, more overlaping. If the remaining view
                is large, less overlaping){" "}
              </li>
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-amber-600">entance</span> of
                your house/building, take image of the road left to your
                house/building
              </li>
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-amber-600">entance</span> of
                your house/building, take image of the road right to your
                house/building
              </li>
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-teal-900">backside</span> of
                your house/building, take image of the road left to your
                house/building
              </li>
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-teal-900">backside</span> of
                your house/building, take image of the road right to your
                house/building
              </li>
              <li className="p-2">
                Stand at the{" "}
                <span className="font-bold text-teal-900">backside</span> of
                your house/building, take 3 images of the back view .Note that
                each image should contain the view after the previous image with
                some overlaped part of previous image. Overlaping should be done
                keeping in mind the amount of view left to cover.(If the
                reamaining view is less, more overlaping. If the remaining view
                is large, less overlaping){" "}
              </li>

              <li>Ensure good lighting for better image quality.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {" "}
              Demo:{" "}
            </h2>
            <p className="mb-4 text-gray-700">
              Your uploaded 9 photos would be arranged like this:
            </p>

            {/* <div className="container mx-auto mt-10">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/1.jpg" alt="Image 1" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/2.jpg" alt="Image 2" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="/mapping_images/3.jpg" alt="Image 3" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/4.jpg" alt="Image 4" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 w-56 h-56 m-auto rounded-full shadow-md">
                  <div  className="  object-cover rounded-lg text-black m-auto  ">YOU ARE HERE</div>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/6.jpg" alt="Image 6" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/7.jpg" alt="Image 7" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/8.jpg" alt="Image 8" className="w-full h-40 object-cover rounded-lg"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <img src="mapping_images/9.jpg" alt="Image 9" className="w-full h-40 object-cover rounded-lg"/>
                </div>
              </div>
            </div> */}

            <div className="container w-full mx-auto mt-10">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/1.jpg"
                    alt="Image 1"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg"
                  />
                </div>
                <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/2.jpg"
                    alt="Image 2"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg"
                  />
                </div>
                <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/3.jpg"
                    alt="Image 3"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg"
                  />
                </div>

           
                  <div className="grid  sm:gap-4 gap-2 ">
                    <div className="shadow shadow-slate-500 sm:p-4 p-1 flex justify-center items-center rounded-lg">
                      <img
                        src="/mapping_images/4.jpg"
                        alt="Image 4"
                        className="w-full h-20 sm:h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="shadow flex shadow-slate-500  sm:p-4 p-1  justify-center items-center rounded-lg">
                      
                      <img
                        src="/mapping_images/5.jpg"
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
                        src="/mapping_images/6.jpg"
                        alt="Image 7"
                        className="w-full h-20 sm:h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="shadow shadow-slate-500 sm:p-4 p-1 flex  justify-center items-center rounded-lg">
                        <img
                          src="/mapping_images/7.jpg"
                          alt="Image 8"
                          className="w-full h-20 sm:h-40 object-cover rounded-lg "
                        />
                      </div>
                    </div>
                  </div>
                

                <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/8.jpg"
                    alt="Image 9"
                    className="w-full h-20 sm:h-40    object-cover rounded-lg"
                  />
                </div>
                <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/9.jpg"
                    alt="Image 10"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg"
                  />
                </div>
                <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
                  <img
                    src="/mapping_images/10.jpg"
                    alt="Image 11"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

          <h1 className="text-black text-center font-bold text-3xl mt-10">
            TASK SUBMISSION
          </h1>
          <div className=" ">
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

            <div className="flex justify-center mt-8">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">
                    Upload Image(jpg,png,svg,jpeg)
                  </label>
                  <div className="flex items-center bg-black-100 rounded-lg  justify-center w-full">
                  <Form user={user} task={"mapping"} status={"complete"} index={0} time={Date.now()}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
 
  );
};

export default Task1;
