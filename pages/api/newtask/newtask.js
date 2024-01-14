import withAuthorization from "@/middleware/authMiddleware";
import connectDB from "@/utilsServer/connectDb";
import NewtaskModel from "@/models/NewtaskModel"
export default withAuthorization(async function handler(req, res) {
  // CREATE A POST
  if (req.method === "POST") {
    connectDB();
    const {
      text,
      picUrl,
      task,
      name,
      rookies,
      traine,
      elite,
      core,
      dev,
      userpicUrl,
      taskname,
    } = req.body;

    if (text.length === 0)
      return res.status(401).send("Text must be atleast 1 character");

    try {
      const newPost = {
        user: req.userId,
        text,
        picUrl,
        task,
        name,
        rookies,
        traine,
        elite,
        core,
        dev,
        userpicUrl,
        taskname,
      };

      const post = await new NewtaskModel(newPost).save();

      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
