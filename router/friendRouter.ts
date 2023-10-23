import express, { Router } from "express";
import { sendRequest } from "../controller/friendController";
const router = express.Router();
router.route("/:friendID/:userID/send-request").post(sendRequest);

export default router;
