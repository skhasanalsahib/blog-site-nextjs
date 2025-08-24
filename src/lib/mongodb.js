import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/blog";

const connectionToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
};

export default connectionToDatabase;
