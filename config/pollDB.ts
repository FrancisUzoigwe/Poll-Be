import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const pollDB = async () => {
  await mongoose.connect(process.env.MONGO_STRING!).then(() => {
    console.log("DataBase connection successfully established");
  });
};
