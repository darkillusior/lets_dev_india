import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";
import { toast } from "react-toastify";
export const Axios = axios.create({
  baseURL: `${baseUrl}/api/task`,
  headers: { Authorization: cookie.get("token") }
});
export const Axios2 = axios.create({
  baseURL: `${baseUrl}/api/newtask`,
  headers: { Authorization: cookie.get("token") }
});



const toastError = error => toast.error(catchErrors(error));


export const submitNewTask = async (
  task,
  status,
  img,
  index,
  time,
  link
) => {
  try {
     await Axios.post("/", { task,
      status,
      img,
      index,
      time,
      link});

    // const newPost = {
    //   ...res.data,
   
    
   
    // };

    // setPosts(prev => [newPost, ...prev]);
    // setNewPost({ title: "", discription: "" });
  } catch (error) {
    toastError(error);
  }
};




export const submitNewPost = async ( 
  picUrl,text,task,name,rookies,traine,
  elite, core,dev,userpicUrl,taskname

  ) => {
  try {
    const { data } = await Axios2.post("/", { picUrl,text,task,name,rookies,traine,
      elite, core,dev,userpicUrl,taskname });

    return { data };
  } catch (error) {
    throw catchErrors(error);
  }
};

export const deletePost = async (postId, setPosts) => {
  try {
    await Axios2.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));

    toast.info("Post deleted successfully");
  } catch (error) {
    toastError(error);
  }
};

export const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios2.post(`/like/${postId}`);
      setLikes(prev => [...prev, { user: userId }]);
    }
    //
    else if (!like) {
      await Axios2.put(`/unlike/${postId}`);
      setLikes(prev => prev.filter(like => like.user !== userId));
    }
  } catch (error) {
    toastError(error);
  }
};
