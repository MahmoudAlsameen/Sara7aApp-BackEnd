import bcrypt from "bcrypt";
import AppError from "./../utils/appError.js";
import catchAsync from "./../utils/catchAsync.js";

const saltRounds = process.env.SALT_ROUNDS;

const userRegister = catchAsync(async (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  const addedUser = await userModel.create({
    ...req.body,
    password: hashedPassword,
  });
  res.status(201).json({ message: "User added successfully" });
});

const userLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const queriedUser = await userModel.findOne({ email });
  if (queriedUser) {
    const isMatched = bcrypt.compareSync(password, queriedUser.password);
    if (isMatched) {
      const token = jwt.sign({ id: queriedUser.id }, jwt_secret_key);
      res.status(200).json({ message: "Logged in successfully", token });
    } else {
      next(new AppError("Invalid email or password", 401));
    }
  } else {
    next(new AppError("User not found", 404));
  }
});

export { userLogin, userRegister };
