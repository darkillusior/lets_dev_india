import withAuthorization from "@/middleware/authMiddleware";
import connectDB from "@/utilsServer/connectDb";
import TaskModel from "@/models/TaskModel";
import UserModel from "@/models/UserModel";
export default withAuthorization(async function handler(req, res) {
    connectDB();
  if (req.method === "POST") {
 const { userId } = req;
 const { task, status, img, index, time, link } = req.body;
 try {
   if (img.length > 10) {
     return res.status(401).send(" input less images");
   }
   console.log("time", time, "time2", Date.now());
   let user;

   user = await TaskModel.find({ user: userId });

   const exists = user.filter((status) => status.index === index);

   if (exists.length > 0 && exists[0].status === "completed") {
     return res.status(401).send(" data already exist");
   }

   const userpoints = await UserModel.findById(userId);

   if (exists.length === 0) {
     user = new TaskModel({
       user: userId,
       name: userpoints.name,
       task,
       status,
       index,
       userpicUrl: userpoints.userimg,
       rookies: userpoints.rookies,
       traine: userpoints.traine,
       elite: userpoints.elite,
       core: userpoints.core,
       dev: userpoints.dev,
       time: Date.now(),
       img: img,
     });

     await user.save();
   } else {
     user = await TaskModel.find({ user: userId });
     const exists = user.filter(
       (status) => status.status === "inprogess" && status.index === index
     );

     if (exists.length === 0) {
       return res.status(401).send(" data not exist");
     }
     if (Date.now() < userpoints.time[index].time) {
       return res.status(401).send("task in process");
     }
     (exists[0].time = Date.now()), (exists[0].updated = img);
     await user.save();
   }

   let point = [1, 2, 4, 5, 6, 7, 8, 9, 0, 10];

   userpoints.points = point[index];
   if (time < Date.now()) {
     let days = 7;
     let newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
     userpoints.time.push({ index: index, time: newDate });
   } else {
     userpoints.time.push({ completed: true, index: index });
   }
   await userpoints.save();
 } catch (error) {
   console.error(error);
   return res.status(500).send(`Server error`);
 }
  } else if (req.method === "GET") {
       try {
         const { userId } = req;
         let { getFollowingData } = req.query;
         const user = await TaskModel.find({ user: userId });

         if (!user) {
           return res.status(404).send("no data found");
         }
         let post;
         if (getFollowingData === "mapping") {
           post = user.filter(
             (status) =>
               status.status === "completed" && status.task === "mapping"
           );
         } else if (getFollowingData === "cleaning") {
           post = user.filter((status) => status.task === "cleaning");
         } else if (getFollowingData === "planting") {
           post = user.filter(
             (status) =>
               status.status === "completed" && status.task === "planting"
           );
         }

         return res.json(post);
       } catch (error) {
         console.error(error);
         return res.status(500).send(`Server error`);
       }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
});
