import uploadPic from "@/utils/uploadPicToCloudinary";
import React, { useState, useRef } from "react";
import { submitNewTask, submitNewPost } from "@/utils/postActions";
import { toast } from "react-toastify";

function Form({  task, status, index, time, postTask, user, setPosts }) {
  const [category, setCategory] = useState();

  const [link, setLink] = useState();
  const [images, setImgs] = useState(null);
  const [media, setMedia] = useState([]);
  const [taskname, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // const inputRef = useRef();
  const [error, setError] = useState(null);


  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let picUrl;

    if (images) {
      picUrl = await uploadPic(images);
      if (!picUrl) {
        setLoading(false);
        return toast.error("Error Uploading Image");
      }
    }
    console.log(picUrl);
    try {
      if (postTask) {
        let { data } = await submitNewPost(
          picUrl,
          link,
          task,
          user.name,
          user.rookies,

          user.traine,
          user.elite,

          user.core,

          user.dev,
          user.userimg,
          taskname
        );

        const createdPost = {
          ...data,
          user,
        };
        setPosts((prev) => [createdPost, ...prev]);
      } else {
        await submitNewTask(
          task,
          status,
          picUrl,
          index,
          time,
          link,
         
        );
      }

      setLink("");

      setName("");
      
    } catch (error) {
      toast.error(error);
    }
    setLoading(false);
    if (images) {
      setImgs(null);
      setMedia(null)
    }
    
  };

  const onchange = async (e) => {
    setImgs(e.target.files);
 let imgurl=[]
    for (let index = 0; index < e.target.files.length; index++) {
      let url = URL.createObjectURL(e.target.files[index]);

       imgurl.push(url )
    }
    setMedia(imgurl)
  };



  return (
    <div className="sm:p-10 p-2 w-full">

      <form
        className={`w-full  profile-page rounded-lg p-10 flex flex-col  ${task==="project"?"border border-yellow-300":"border border-gray-200"}  justify-center items-center   `}
        onSubmit={handelSubmit}
      >
         <h1 className=" flex justify-center items-center w-full font-semibold text-lg">{task==="project"?"Project":"Task"}</h1>
        <h1 className=" flex w-full font-semibold text-lg">Images</h1>

        <input
          multiple
          name="image"
          onChange={onchange}
          className="mt-1 bg-transparent"
          type="file"
        />

        {postTask?media?.length > 0 && (
          <div>
            <h1 className="flex w-full font-semibold text-lg mt-4 ">Preview</h1>
            <div className="cursor-pointer gap-2 w-full flex sm:grid overflow-x-scroll grid-cols-2 md:grid-cols-3 p-2 bg-slate-800 rounded-lg m-auto">
              {media.map((img, index) => (
                <img
                  className="w-11/12  sm:w-full min-h-[16rem] rounded-3xl"
                  key={index}
                  src={img}
                  alt="PostImage"
                  centered
                  size="medium"
                />
              ))}
            </div>
          </div>
        ): media?.length > 0 &&  <div className="container w-full mx-auto mt-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[9]}
              alt="Image 1"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[8]}
              alt="Image 2"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[7]}
              alt="Image 3"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>

     
            <div className="grid  sm:gap-4 gap-2 ">
              <div className="shadow shadow-slate-500 sm:p-4 p-1 flex justify-center items-center rounded-lg">
                <img
                  src={media[6]}
                  alt="Image 4"
                  className="w-full h-20 sm:h-40 object-cover rounded-lg"
                />
              </div>
              <div className="shadow flex shadow-slate-500  sm:p-4 p-1  justify-center items-center rounded-lg">
                
                <img
                  src={media[5]}
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
                  src={media[4]}
                  alt="Image 7"
                  className="w-full h-20 sm:h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="shadow shadow-slate-500 sm:p-4 p-1 flex  justify-center items-center rounded-lg">
                  <img
                    src={media[3]}
                    alt="Image 8"
                    className="w-full h-20 sm:h-40 object-cover rounded-lg "
                  />
                </div>
              </div>
            </div>
          

          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[2]}
              alt="Image 9"
              className="w-full h-20 sm:h-40    object-cover rounded-lg"
            />
          </div>
          <div className=" sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[1]}
              alt="Image 10"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
          <div className="sm:p-4 p-1 rounded-lg shadow shadow-slate-500">
            <img
              src={media[0]}
              alt="Image 11"
              className="w-full h-20 sm:h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>}
        <h1 className="flex w-full mt-3 font-semibold text-lg">
          {postTask ? <>Content</> : <>Link</>}
        </h1>
        {postTask ? (
          <textarea
            className="w-full rounded-lg text-black font-serif p-5 mt-1 bg-transparent border outline-none"
            type="text"
            name="name"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        ) : (
          <input
            className=" ml-7 p-2 mb-2 rounded-lg text-black w-1/2 border outline-none"
            type="text"
            name="name"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        )}
     
        {postTask && (  
          <> <h1 className="flex w-full mt-3 font-semibold text-lg">TaskName</h1>
          <input
            name="taskname"
            value={taskname}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg text-white font-serif px-5 py-2 mt-1 bg-transparent border outline-none"
            type="text"
          /></>
        )}

        <button
          disabled={loading} // Disable the button when 'loading' or 'submitting' is true
          className={`w-24 h-10 mt-5 bg-gradient-to-br hover:shadow-white rounded-lg from-blue-500 to-transparent hover:bg-primary text-white font-semibold`}
        >
          {loading ? "Submitting..." : postTask ? "Submit Post" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default Form;
