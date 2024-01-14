import { useState,useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

const Task2 = ({user}) => {


  useEffect(() => {
   console.log("date",Date.now())
  }, [])
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-4 pt-16">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="pb-10">
            <Link href="/main">
              <Image
                width={100}
                height={100}
                className="w-8 cursor-pointer"
                src="/images/back_arrow_icon.svg"
                alt="back-arrow"
              />
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Cleaning Instructions
            </h1>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              1. Capture {`'Before'`} Images
            </h2>
            <p className="mb-4 text-gray-700">
              Start by posting images of dirty places in your vicinity that you
              want to clean. Make sure the images clearly show the dirt or
              garbage in the area. For best results, follow these guidelines:
            </p>
            <div className="flex justify-center">
              <div className="container w-full mx-auto mt-10">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
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
                </div>
              </div>
            </div>
            <ul className="list-disc pl-6 mt-4 text-gray-700">
              <li>Take photos from an appropriate height for a clear view.</li>
              <li>Ensure good lighting for better image quality.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              2. Clean the Places
            </h2>
            <p className="mb-4 text-gray-700">
              Once you have captured the {`'Before'`} images, go ahead and clean
              the places you have photographed. Remove any garbage or dirt, and
              make the area as clean as possible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              3. Capture {`'After'`} Images
            </h2>
            <p className="mb-4 text-gray-700">
              After cleaning the places, take another set of photos to capture
              the {`'After'`} images. These images should show the cleaned area
              and reflect the positive change you have made. Remember to follow
              the guidelines mentioned earlier for clear and high-quality
              images.
            </p>
            <div className="flex justify-center">
              <div className="container w-full mx-auto mt-10">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
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
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-black text-center font-bold text-3xl mt-10">
            TASK SUBMISSION
          </h1>
          <div className=" ">
            {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button> */}

            <div className="flex justify-center mt-8">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">
                    Upload Image(jpg,png,svg,jpeg)
                  </label>
                  <div className="flex items-center bg-black-100 rounded-lg  justify-center w-full">
                  <Form user={user} task={"cleaning"} status={"inprogess"} index={1}  time={Date.now()}/>
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

export default Task2;
