const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"https://lets-dev-india.vercel.app";

module.exports = baseUrl;
