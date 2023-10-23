import express from "express";
import env from "dotenv";
import { pollDB } from "./config/pollDB";
import { mainApp } from "./mainApp";
env.config();
const app = express();

const port: number = parseInt(process.env.PORT!);
const realPort = port;

mainApp(app);
const Server = app.listen(realPort, () => {
  console.log("Server is live and listening on port:", realPort);
  pollDB();
});

process.on("uncaughtException", (error) => {
  console.log("");
  console.log("Server is shutting down due to an uncaught exception", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to an unhandled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
