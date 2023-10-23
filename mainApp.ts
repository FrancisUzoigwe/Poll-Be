import express, { Application, Request, Response } from "express";
import cors from "cors";
import user from "./router/userRouter";
import friend from "./router/friendRouter";


export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message:
        "You're using Francis Kossyrisochukwu Uzoigwe's Api on Poll System",
    });
  });
  app.use("/api", user);
  app.use("/api", friend)
};
