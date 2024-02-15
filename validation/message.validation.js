import Joi from "joi";

const messageValidationSchema = Joi.object({
  messageText: Joi.string().required().min(3).messages({
    "any.required": "Message content is required",
    "string.min": "Message must be at least 3 characters long",
  }),
  receivedId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .messages({
      "string.pattern.base": "Invalid receivedId format",
    }),
});

export default messageValidationSchema;
