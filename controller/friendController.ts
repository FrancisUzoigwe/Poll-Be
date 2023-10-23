import { Request, Response } from "express";
import userModel from "../model/userModel";
import friendModel from "../model/friendModel";
import mongoose from "mongoose";

export const sendRequest = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;
    const user = await userModel.findById(userID);
    const friend: any = await friendModel.findById(friendID);

    if (user) {
      user?.friend?.push(new mongoose.Types.ObjectId(friend?._id));
      user?.save();
    }
    return res.status(200).json({
      message: "Request sent successfully",
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while sending a request",
    });
  }
};


export const deleteRequest = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;
    const user: any = await userModel.findById(userID);
    const friend: any = await friendModel.findById(friendID);

    if (user && friend) {
      user?.friend?.pull(new mongoose.Types.ObjectId());
      user?.save();
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while sending a request",
    });
  }
};
