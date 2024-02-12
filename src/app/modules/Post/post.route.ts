import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PostValidation } from "./post.validation";
import { PostController } from "./post.controller";
// import { upload } from "../../utils/sendImageToCloudinary";

const router = express.Router();

// call controller function
router.post(
  "/create-post",
  validateRequest(PostValidation.createPostValidationSchema),
  PostController.createPost
);

router.get("/get-all-posts", PostController.getAllPost);

export const PostRoutes = router;
