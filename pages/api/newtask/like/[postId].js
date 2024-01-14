import withAuthorization from "@/middleware/authMiddleware";
import connectDB from "@/utilsServer/connectDb";
import NewtaskModel from "@/models/NewtaskModel";
export default withAuthorization(async function handler(req, res) {
  // LIKE A POST
  if (req.method === "POST") {
    connectDB();
    try {
      const { postId } = req.params;
      const { userId } = req;

      const post = await NewtaskModel.findById(postId);
      if (!post) {
        return res.status(404).send("No Post found");
      }

      const isLiked = post.likes.some(
        (like) => like.user.toString() === userId
      );

      if (isLiked) {
        return res.status(401).send("Post already liked");
      }

      post.likes.unshift({ user: userId });
      await post.save();

      return res.status(200).send("Post liked");
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
