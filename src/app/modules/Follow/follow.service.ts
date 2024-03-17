import { TFollow } from "./follow.interface";
import { Follow } from "./follow.model";

const createFollowIntoDB = async (payload: TFollow) => {
  const result = await Follow.create(payload);
  return result;
};

const checkFollowUserFromDB = async (followingUserId: string) => {
  const followUser = await Follow.find({ followingUserId });
  return followUser.map((follow) => follow.followerUserId);
};

export const FollowServices = {
  createFollowIntoDB,
  checkFollowUserFromDB,
};
