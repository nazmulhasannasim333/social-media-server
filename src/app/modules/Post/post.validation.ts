import { z } from "zod";

export const createPostValidationSchema = z.object({
  body: z.object({
    postText: z.string({
      invalid_type_error: "Post text is required and must be a string",
    }),
    userId: z.string({
      invalid_type_error: "User ID is required and must be a string",
    }),
  }),
});

export const PostValidation = {
  createPostValidationSchema,
};
