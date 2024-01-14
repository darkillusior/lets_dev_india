import withAuthorization from "@/middleware/authMiddleware";
import connectDB from "@/utilsServer/connectDb";
import NewtaskModel from "@/models/NewtaskModel";
import UserModel from "@/models/UserModel";
export default withAuthorization(async function handler(req, res) {
  // Delete Post
  if (req.method === "DELETE") {
    connectDB();
   try {
     const { userId } = req;

     const { postId } = req.params;

     const post = await NewtaskModel.findById(postId);
     if (!post) {
       return res.status(404).send("post not found");
     }

     const deletePost = async () => {
       await post.deleteOne();
       return res.status(200).send("Post deleted Successfully");
     };

     if (post.user.toString() !== userId) {
       const user = await UserModel.findById(userId);
       if (user.role === "root") {
         await deletePost();
       } else {
         return res.status(401).send("Unauthorized");
       }
     }

     await deletePost();
   } catch (error) {
     console.error(error);
     return res.status(500).send(`Server error`);
   }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
