import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl animate-fade-in-out">
              Join us to make the </br>
              <span className="text-primary dark:text-white">
                India better place for all.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              DEV INDIA's mission is to create a sustainable society by mapping,
              cleaning, and growing together for a greener, cleaner, and
              healthier India. We envision an India where communities actively
              participate in environmental preservation, fostering nature's
              thriving biodiversity and promoting collective well-being for a
              sustainable future.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href="/main"
                className="animate-slide-in-left relative flex h-11 w-3/4 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-1/4"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </Link>
              <Link
                href="/about"
                className="relative flex h-12 w-4/6 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
              
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              
              </Link>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center pb-4">
                  <Image
                    src="/images/clients/impact.png"
                    className="w-12"
                    width={100}
                    height={100}
                    alt="impact illustration"
                  />
                </div>
                <h6 className="text-center text-lg font-semibold text-gray-700 dark:text-white">
                  Impact stories
                </h6>
                <p className="text-sm mt-2 text-gray-500">
                  See how your support makes a difference. Read inspiring
                  stories from those who serve.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center pb-4">
                  <Image
                    src="/images/clients/donation.png"
                    className="w-12"
                    width={100}
                    height={100}
                    alt="donation illustration"
                  />
                </div>
                <h6 className="text-center text-lg font-semibold text-gray-700 dark:text-white">
                  Donation options
                </h6>
                <p className="text-sm mt-2 text-gray-500">
                  Help us make a difference. Make a one-time or recurring
                  donation today. Choose a specific cause to support.
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center pb-4">
                  <Image
                    src="/images/clients/volunteer.png"
                    className="w-12"
                    width={100}
                    height={100}
                    alt="impact illustration"
                  />
                </div>
                <h6 className="text-center text-lg font-semibold text-gray-700 dark:text-white">
                  Volunteer opportunities
                </h6>
                <p className="text-sm mt-2 text-gray-500">
                  Join our team and make a difference. We need volunteers of all
                  kinds. start now!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/microsoft.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/airbnb.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/google.svg"
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/ge.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/netflix.svg"
                className="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src="./images/clients/google-cloud.svg"
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width={10}
                height={10}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
