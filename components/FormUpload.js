import React from "react";

function FormUpload() {
  return (
    <>
      <div class="flex justify-center mt-8">
        <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
          <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div class="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input type="file" class="opacity-0" />
              </label>
            </div>
          </div>
          <div class="flex p-2 space-x-4">
            <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
              Cannel
            </button>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormUpload;
