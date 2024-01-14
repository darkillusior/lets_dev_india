import mongoose from "mongoose";
const connectDB = async () => {
  try {
     mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected...");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
