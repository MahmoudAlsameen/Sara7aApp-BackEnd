import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  let token = req.header("token");
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) next(err);
    req.userId = decoded.id;
    next();
  });
};

export default auth;
