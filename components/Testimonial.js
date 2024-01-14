import React from 'react';

const Testimonial = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 py-40" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Stories of Positive Impact
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {/* Testimonial 1 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 1</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Environmental Activist</p>
              </div>
            </div>
            <p className="mt-8">
              Our efforts to map and clean up local neighborhoods have led to cleaner streets and healthier communities. By planting trees and creating green spaces, we're not only improving the environment but also bringing people together to create a brighter future for India.
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 2</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Community Organizer</p>
              </div>
            </div>
            <p className="mt-8">
              Through our collaborative efforts, we've transformed abandoned spaces into lush gardens and recreational areas. These initiatives not only beautify our neighborhoods but also instill a sense of pride and responsibility among local residents.
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 3</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Nature Enthusiast</p>
              </div>
            </div>
            <p className="mt-8">
              Planting trees has a profound impact on our ecosystem. By collaborating with local schools, we've educated the younger generation about the importance of environmental conservation. Together, we're sowing the seeds of a greener and healthier future for India.
            </p>
          </div>
          {/* Testimonial 4 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 4</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Community Leader</p>
              </div>
            </div>
            <p className="mt-8">
              Through our collaborative efforts, we've transformed abandoned spaces into vibrant gardens that inspire a sense of pride among residents. Our clean-up initiatives have made our communities more attractive and welcoming, fostering a strong sense of belonging.
            </p>
          </div>
          {/* Testimonial 5 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="200"
                height="200"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 5</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Social Activist</p>
              </div>
            </div>
            <p className="mt-8">
              Our mapping projects have empowered local communities to identify areas in need of improvement. By involving citizens in decision-making, we're creating a more sustainable and harmonious environment for all residents of India.
            </p>
          </div>
          {/* Testimonial 6 */}
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full bg-white-100 flex items-center justify-center text-gray-600"
                src=""
                alt="user"
                width="400"
                height="400"
                loading="lazy"
              />
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Member 6</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">environmentalist</p>
              </div>
            </div>
            <p className="mt-8">
              By collaborating with local authorities, we've turned neglected urban spaces into thriving green oases. These efforts not only contribute to cleaner air and water but also provide residents with peaceful areas to relax and connect with nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
