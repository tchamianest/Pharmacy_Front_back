import express from "express";
import multerupload from "../utils/multer.js";
import { tokenChecker } from "../controller/TokenCheck.js";
import {
  userSignup,
  profile,
  userLogin,
  editUser,
  GetAllUsers,
  updatePassword,
} from "../controller/user.controller.js";
import authenticat from "../middleware/userAuthenticate.js";

const users = express.Router();

users.post("/signup", userSignup);
users.post("/login", userLogin);
users.get("/profile", authenticat, profile);
users.patch(
  "/profiles",
  authenticat,
  multerupload.single("profileImage"),
  editUser
);
users.patch("/updatepassword", authenticat, updatePassword);
users.get("/tokecheck", authenticat, tokenChecker);
users.get("/", GetAllUsers);

export default users;
