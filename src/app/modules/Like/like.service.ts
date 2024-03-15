import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLike } from "./like.interface";
import { Like } from "./like.model";

const createLikeIntoDB = async (payload: TLike) => {
  const { postId, userId } = payload;

  const existingLike = await Like.findOne({ postId, userId });
  if (existingLike) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already liked this post"
    );
  }

  const result = await Like.create(payload);
  return result;
};

const removeLikeFromDB = async (postId: string, userId: string) => {
  const existingLike = await Like.findOne({ postId, userId });
  if (!existingLike) {
    throw new AppError(httpStatus.NOT_FOUND, "Post or user not found");
  }
  const result = await Like.deleteOne({ postId, userId });
  return result;
};

const getTotalLikeFromDB = async (postId: string) => {
  const result = await Like.countDocuments({ postId });
  return result;
};

const checkPostLikeFromDB = async (userId: string) => {
  const likedPosts = await Like.find({ userId });
  return likedPosts.map((post) => post.postId);
};

export const LikeServices = {
  createLikeIntoDB,
  getTotalLikeFromDB,
  removeLikeFromDB,
  checkPostLikeFromDB,
};
