const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"https://lets-dev-india-ivory.vercel.app";

module.exports = baseUrl;
