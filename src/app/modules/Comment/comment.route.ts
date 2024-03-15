import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CommentValidation } from "./comment.validation";
import { CommentController } from "./comment.controller";

const router = express.Router();

// call controller function
router.post(
  "/create-comment",
  validateRequest(CommentValidation.createCommentValidationSchema),
  CommentController.createComment
);

router.get("/get-all-comment/:postId", CommentController.getComments);
router.get("/get-total-comment/:postId", CommentController.getTotalComment);

export const CommentRoutes = router;
