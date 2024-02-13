import { z } from "zod";

export const createCommentValidationSchema = z.object({
  body: z.object({
    commentText: z.string({
      invalid_type_error: "Comment text is required and must be a string",
    }),
    postId: z.string({
      invalid_type_error: "Post ID is required and must be a string",
    }),
    userId: z.string({
      invalid_type_error: "User ID is required and must be a string",
    }),
  }),
});

export const CommentValidation = {
  createCommentValidationSchema,
};
