import mongoose from "mongoose";

interface iFriend {
  friend?: [];
  accept: boolean;
}

interface iFriendData extends iFriend, mongoose.Document {}
const friendModel = new mongoose.Schema(
  {
    accept: { type: Boolean },
    friend: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iFriendData>("friends", friendModel);
