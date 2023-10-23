import mongoose from "mongoose";

interface iUser {
  name?: string;
  email?: string;
  password?: string;
  location?: string;
  like?: [];
  friend?: {}[];
}

interface iUserData extends iUser, mongoose.Document {}
const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  location: { type: String },
  like: [
    {
      type: mongoose.Types.ObjectId,
      ref: "likes",
    },
  ],
  friend: [
    {
      type: mongoose.Types.ObjectId,
      ref: "friends",
    },
  ],
}
, {timestamps: true});

export default mongoose.model<iUserData>("users", userModel);
