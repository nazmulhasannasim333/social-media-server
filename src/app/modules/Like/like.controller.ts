import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { LikeServices } from "./like.service";

const createLike = catchAsync(async (req, res) => {
  const likeData = req.body;
  const result = await LikeServices.createLikeIntoDB(likeData);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Like created successfully",
    data: result,
  });
});

const removeLike = catchAsync(async (req, res) => {
  const { postId, userId } = req.params;
  const result = await LikeServices.removeLikeFromDB(postId, userId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Like removed successfully",
    data: result,
  });
});
const getTotalLike = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const result = await LikeServices.getTotalLikeFromDB(postId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Total like retrieved successfully",
    data: result,
  });
});

export const LikeController = {
  createLike,
  getTotalLike,
  removeLike,
};
