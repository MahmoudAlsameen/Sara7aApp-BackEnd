import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    messageContent: {
      type: String,
      required: [true, "Message content is required"],
      minLength: [3, "Message must be at least 3 characters long"],
    },
    receivedId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
