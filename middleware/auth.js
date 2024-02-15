import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";

const auth = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return next(new AppError("No token provided", 401));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) next(err);
    else {
      req.userId = decoded.id;
      next();
    }
  });
};

export default auth;
