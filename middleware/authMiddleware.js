import jwt from "jsonwebtoken";

const withAuthorization = (handler) => {
  return async (req, res) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).send(`Unauthorized`);
      }

      const { userId } = jwt.verify(
        req.headers.authorization,
        process.env.JwtSecret
      );

      req.userId = userId;
      return handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(401).send(`Unauthorized`);
    }
  };
};

export default withAuthorization;
