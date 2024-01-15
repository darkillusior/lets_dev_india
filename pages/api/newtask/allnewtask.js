import withAuthorization from "@/middleware/authMiddleware";
import connectDB from "@/utilsServer/connectDb";
import TaskModel from "@/models/TaskModel";
export default withAuthorization(async function handler(req, res) {
  // Get All Post
  if (req.method === "GET") {
    connectDB();
   const { pageNumber } = req.query;
   try {
     const number = Number(pageNumber);
     const size = 8;

     let posts = [];

     if (number === 1) {
       posts = await TaskModel.find()
         .limit(size)
         .sort({ createdAt: -1 });
     }

     //
     else {
       const skips = size * (number - 1);

       posts = await TaskModel.find()
         .skip(skips)
         .limit(size)
         .sort({ createdAt: -1 });
     }

     return res.json(posts);
   } catch (error) {
     console.error(error);
     return res.status(500).send(`Server error`);
   }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
