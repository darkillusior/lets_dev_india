import connectDb from "@/utilsServer/connectDb";
import UserModel from "@/models/UserModel";
import withAuthorization from "@/middleware/authMiddleware";

export default withAuthorization(async function handler(req, res) {
  if (req.method === "GET") {
    const { userId } = req;

    try {
      const user = await UserModel.findOne({ _id: userId });
      if (!user) {
        return res.status(404).send("User not found");
      }

      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  }
});
