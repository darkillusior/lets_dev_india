import React from "react";
import Image from "next/image";
const CallToAction = () => {
  return (
    <div className="relative py-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              loading="lazy"
              width={400}
              height={400}
              src=""
              alt="1"
              className="h-8 w-8 rounded-full object-cover bg-red-500 flex items-center justify-center text-gray-600"
            />
            <Image
              loading="lazy"
              width={400}
              height={400}
              src=""
              alt="2"
              className="h-10 w-10 rounded-full object-cover bg-orange-500 flex items-center justify-center text-gray-600"
            />
            <Image
              loading="lazy"
              width={200}
              height={200}
              src=""
              alt="3"
              className="h-12 w-12 rounded-full object-cover bg-yellow-500 flex items-center justify-center text-gray-600"
            />
            <Image
              loading="lazy"
              width={200}
              height={200}
              src=""
              alt="4"
              className="z-10 h-16 w-16 rounded-full object-cover bg-green-500 flex items-center justify-center text-gray-600"
            />
            
            <Image
              loading="lazy"
              width={200}
              height={200}
              src=""
              alt="5"
              className="relative h-12 w-12 rounded-full object-cover bg-blue-500 flex items-center justify-center text-gray-600"
            />
            <Image
              loading="lazy"
              width={200}
              height={200}
              src=""
              alt="6"
              className="h-10 w-10 rounded-full object-cover bg-indigo-500 flex items-center justify-center text-gray-600"
            />
            <Image
              loading="lazy"
              width={200}
              height={200}
              src=""
              alt="7"
              className="h-8 w-8 rounded-full object-cover bg-violet-500 flex items-center justify-center text-gray-600"
            />
          </div>
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Get Started now
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
            Be part of a noble cause, and help us make the world a better place for all.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/main"
                className="relative flex h-12 w-4/6 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Get Started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-12 w-4/6 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
