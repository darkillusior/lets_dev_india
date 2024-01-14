import UserModel from "@/models/UserModel";
import connectDB from "@/utilsServer/connectDb";


export default async function handler(req, res) {
  connectDB();
  if (req.method === "POST") {
    try {
      const { userId } = req;

      const { picUrl, info } = req.body;

      const user = await UserModel.findById(userId);
      user.userimg = picUrl;
      user.master = info;
      await user.save();

      return res.status(200).send("Success");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
