import React, { useState, useRef } from "react";
import uploadPic from "../utils/uplodesinglefile";
import { profileUpdate } from "@/utils/profileActions";
export default function Modal2({}) {
  const [showModal, setShowModal] = React.useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [info, setinfo] = useState("");
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      if (files && files.length > 0) {
        setMedia(files[0]);
        return setMediaPreview(URL.createObjectURL(files[0]));
      }
    }
  };
  const inputRef = useRef();

  const handleSubmit = async () => {
    // e.preventDefault();

    let picUrl;

    if (media !== null) {
      picUrl = await uploadPic(media);
    }

    await profileUpdate(picUrl, info);

    setMedia(null);
    mediaPreview && URL.revokeObjectURL(mediaPreview);
  };

  return (
    <>
      <button
        className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Info
      </button>
      {showModal ? (
        <>
          <div className="justify-center profile-page items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full card-profile outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Update Info
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex items-center justify-around">
                    {media === null && mediaPreview === null ? (
                      <>
                        <input
                          ref={inputRef}
                          onChange={handleChange}
                          name="media"
                          style={{ display: "none" }}
                          type="file"
                          required
                        />
                        <div
                          className="flex flex-col p-5 item-center justify-center"
                          onClick={() => inputRef.current.click()}
                        >
                          <h1 className="text-8xl text-white">+</h1>
                          <h1 className="font-semibold text-center text-lg text-white">
                            Image
                          </h1>
                        </div>
                      </>
                    ) : media != null && mediaPreview ? (
                      <div className="flex flex-col">
                        <img
                          className="rounded-xl"
                          style={{ height: "100px", width: "100px" }}
                          src={mediaPreview}
                          alt="PostImage"
                          centered
                          size="medium"
                        />
                        {/* <h1 className="font-semibold text-lg">Image</h1> */}
                      </div>
                    ) : null}
                    <textarea
                      className="h-24 w-96 border-2 bg-transparent placeholder:text-white outline-none border-white border-solid rounded-lg p-2 text-white"
                      placeholder="Add discription"
                      name="discription"
                      value={info}
                      onChange={(e) => setinfo(e.target.value)}
                      required
                    />

                    {/* <button>Update</button> */}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600 hover:text-red-400 background-transparent font-bold px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setinfo("");
                      setMedia(null);
                      setMediaPreview(null);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-800 font-bold text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleSubmit();
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
