import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { LikeValidation } from "./like.validation";
import { LikeController } from "./like.controller";

const router = express.Router();

// call controller function
router.post(
  "/create-like",
  validateRequest(LikeValidation.createLikeValidationSchema),
  LikeController.createLike
);

router.get("/get-all-likes/:postId", LikeController.getTotalLike);
router.get("/check-liked/:userId", LikeController.checkPostLike);
router.delete("/remove-like/:postId/:userId", LikeController.removeLike);

export const LikeRoutes = router;
