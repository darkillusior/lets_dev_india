import UserModel from "@/models/UserModel";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import connectDb from "@/utilsServer/connectDb";
export default async function handler(req, res) {
  connectDb();
  if (req.method === "POST") {
    const { client_id, jwtToken } = req.body.user;

    try {
      const client = new OAuth2Client(client_id);
      // Call the verifyIdToken to
      // varify and decode it
      const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
      });
      // Get the JSON with all the user info
      const data = ticket.getPayload();

      let user = await UserModel.findOne({ email: data.email });
      if (!user) {
        user = new UserModel({
          name: data.name,
          email: data.email,
          userimg: data.picture,
        });

        await user.save();
      }

      const payload = { userId: user._id };
      jwt.sign(
        payload,
        process.env.JwtSecret,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;

          res.json(token);
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
