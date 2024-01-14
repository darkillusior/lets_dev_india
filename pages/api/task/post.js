
import withAuthorization from "@/middleware/authMiddleware";
import TaskModel from "@/models/TaskModel";
import connectDB from "@/utilsServer/connectDb";

export default withAuthorization(async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
     try {
       const user = await TaskModel.find();

       return res.json(user);
     } catch (error) {
       console.error(error);
       return res.status(500).send(`Server error`);
     }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
