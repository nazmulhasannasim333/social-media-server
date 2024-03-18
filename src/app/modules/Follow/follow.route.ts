import express from "express";
import { FollowController } from "./follow.controller";

const router = express.Router();

router.post("/create-follow", FollowController.createFollow);
router.delete(
  "/remove-follow/:followingUserId/:followerUserId",
  FollowController.removeFollow
);
router.get("/check-follow/:followingUserId", FollowController.checkFollow);
router.get("/get-following/:followingUserId", FollowController.getFollowing);
router.get("/get-follower/:followingUserId", FollowController.getFollower);

export const FollowRoutes = router;
