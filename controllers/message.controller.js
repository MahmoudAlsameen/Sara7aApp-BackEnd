import messageModel from "../db/models/message.model.js";
import userModel from "../db/models/user.model.js";
import catchAsync from "../utils/catchAsync.js";

export const addMessage = catchAsync(async (req, res, next) => {
  let { messageText, receivedId } = req.body;
  let targetUser = await userModel.findById(receivedId);
  if (targetUser) {
    let addedMessage = await messageModel.insertMany({
      messageText,
      receivedId,
    });
    res
      .status(201)
      .json({ message: "Message successfully added", addedMessage });
  } else {
    next(new AppError("User not found", 404));
  }
});

export const getMessages = catchAsync(async (req, res) => {
  let allMessages = await messageModel.find({ receivedId: req.userId });
  res.json({ message: "Done", allMessages });
});
