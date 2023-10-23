import express, { Request, Response } from "express";
import userModel from "../model/userModel";
import friendModel from "../model/friendModel";
import mongoose from "mongoose";

export const sendLike = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;
    const user = await userModel.findById(userID);
    const friend = await friendModel.findById(friendID);

    if (user && friend) {
      user?.friend?.push(new mongoose.Types.ObjectId(friend?._id));
      user?.save();
    }
    return res.status(200).json({
      message: "Like sent",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while liking this user",
    });
  }
};

export const unSendLike = async (req: Request, res: Response) => {
  try {
    const { userID, friendID } = req.params;
    const user: any = await userModel.findById(userID);
    const friend = await friendModel.findById(friendID);

    if (user && friend) {
      user?.friend?.pull(new mongoose.Types.ObjectId(friend?._id));
      user?.save();
    }
    return res.status(200).json({
      message: "Like sent",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while unliking user",
    });
  }
};
