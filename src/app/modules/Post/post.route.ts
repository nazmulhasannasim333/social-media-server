import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PostValidation } from "./post.validation";
import { PostController } from "./post.controller";

const router = express.Router();

// call controller function
router.post(
  "/create-post",
  validateRequest(PostValidation.createPostValidationSchema),
  PostController.createPost
);

router.get("/get-all-posts", PostController.getAllPost);
router.delete("/delete-post/:postId", PostController.deletePost);
router.put("/update-post/:postId", PostController.updatePost);

export const PostRoutes = router;
