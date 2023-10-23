import mongoose from "mongoose";

interface iLike {
  user?: {}[]
}

interface iLikeData extends iLike, mongoose.Document {}
const likeModel = new mongoose.Schema({
 user: {
    type: mongoose.Types.ObjectId,
    ref: "users"
 }
},  {timestamps: true});

export default mongoose.model<iLikeData>("likes", likeModel);
