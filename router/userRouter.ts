import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  readAllUsers,
  readOneUser,
  searchLocation,
  searchUser,
} from "../controller/userController";
const router = express.Router();
router.route("/create-user").post(createUser);
router.route("/view-all-users").get(readAllUsers);
router.route("/:userID/delete-user").delete(deleteUser);
router.route("/:userID/view-one-user").get(readOneUser)
router.route("/search-location").get(searchLocation)
router.route("/search-user").get(searchUser)

export default router;
