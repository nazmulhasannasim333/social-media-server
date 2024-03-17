import httpStatus from "http-status";
import { FollowServices } from "./follow.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createFollow = catchAsync(async (req, res) => {
  const likeData = req.body;
  const result = await FollowServices.createFollowIntoDB(likeData);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Follow added successfully",
    data: result,
  });
});

const removeFollow = catchAsync(async (req, res) => {
  const { followingUserId, followerUserId } = req.params;
  const result = await FollowServices.removeFollowFromDB(
    followingUserId,
    followerUserId
  );
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Unfollowed successfully",
    data: result,
  });
});

const checkFollow = catchAsync(async (req, res) => {
  const { followingUserId } = req.params;
  const result = await FollowServices.checkFollowUserFromDB(followingUserId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Retrieved user follow other user",
    data: result,
  });
});

export const FollowController = {
  createFollow,
  checkFollow,
  removeFollow,
};
