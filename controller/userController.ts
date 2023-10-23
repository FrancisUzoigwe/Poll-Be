import express, { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name, password, location } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      email,
      name,
      password: hashed,
      location,
    });
    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while creating user",
      error: error?.message,
    });
  }
};

export const readOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);
    return res.status(200).json({
      message: "Reading one user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while reading one user",
    });
  }
};

export const readAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find().sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Reading all users on the platform",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while reading all users",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findByIdAndDelete(userID);
    return res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while creating user",
    });
  }
};

export const searchLocation = async (req: Request, res: Response) => {
  try {
    const { location } = req.body;
    const geo = await userModel.find({ location }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Location found successfully",
      data: geo,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while searching user",
      error: error?.message,
    });
  }
};

export const searchUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const geo = await userModel.find({ name }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Location found successfully",
      data: geo,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while searching user",
      error: error?.message,
    });
  }
};



