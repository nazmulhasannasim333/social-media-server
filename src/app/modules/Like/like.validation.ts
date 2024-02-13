import { z } from "zod";

export const createLikeValidationSchema = z.object({
  body: z.object({
    postId: z.string({
      invalid_type_error: "Post ID is required and must be a string",
    }),
    userId: z.string({
      invalid_type_error: "User ID is required and must be a string",
    }),
  }),
});

export const LikeValidation = {
  createLikeValidationSchema,
};
