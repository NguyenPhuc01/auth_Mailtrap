import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully", conn.connection.host);
  } catch (error) {
    console.log("error connection to Mongoose", error.message);
    process.exit(1); // 1 is Failure, 0 is Success
  }
};