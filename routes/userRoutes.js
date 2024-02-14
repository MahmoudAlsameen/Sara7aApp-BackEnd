import express from "express";
import { userLogin, userRegister } from "../controllers/user.controller.js";
import {
  userLoginSchema,
  userRegisterSchema,
} from "../validation/user.validation.js";
import validation from "./../middleware/validation.js";
const userRoutes = express.Router();

userRoutes.post("/register", validation(userRegisterSchema), userRegister);
userRoutes.post("/login", validation(userLoginSchema), userLogin);

export default userRoutes;
