import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";

const auth = (req, res, next) => {
  let token = req.header("token");
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) next(new AppError(`Invalid token`, 401));
    req.userId = decoded.id;
    next();
  });
};

export default auth;
