import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TFollow } from "./follow.interface";
import { Follow } from "./follow.model";

const createFollowIntoDB = async (payload: TFollow) => {
  const { followingUserId, followerUserId } = payload;

  const existingFollow = await Follow.findOne({
    followingUserId,
    followerUserId,
  });
  if (existingFollow) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already follow this user"
    );
  }
  const result = await Follow.create(payload);
  return result;
};

const removeFollowFromDB = async (
  followingUserId: string,
  followerUserId: string
) => {
  const existingFollow = await Follow.findOne({
    followingUserId,
    followerUserId,
  });
  if (!existingFollow) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "You have already unfollow this user"
    );
  }
  const result = await Follow.deleteOne({ followingUserId, followerUserId });
  return result;
};

const checkFollowUserFromDB = async (followingUserId: string) => {
  const followUser = await Follow.find({ followingUserId });
  return followUser.map((follow) => follow.followerUserId);
};

export const FollowServices = {
  createFollowIntoDB,
  checkFollowUserFromDB,
  removeFollowFromDB,
};
