import express from "express";
import { UserRoutes } from "../modules/User/user.route";
import { PostRoutes } from "../modules/Post/post.route";
import { LikeRoutes } from "../modules/Like/like.route";
import { CommentRoutes } from "../modules/Comment/comment.route";
import { FollowRoutes } from "../modules/Follow/follow.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes,
  },
  {
    path: "/likes",
    route: LikeRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
  {
    path: "/follows",
    route: FollowRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
