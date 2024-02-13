import express from "express";
import { validation } from "../../middleware/validation.js";
import {
  userLoginSchema,
  userRegisterSchema,
} from "../validation/user.validation.js";
const userRoutes = express.Router();

userRoutes.post("/", validation(userRegisterSchema), userRegister);
userRoutes.post("/login", validation(userLoginSchema), userLogin);

export default userRoutes;
