import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PostServices } from "./post.service";

const createPost = catchAsync(async (req, res) => {
  const postData = req.body;
  const result = await PostServices.createPostIntoDB(postData);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post created successfully",
    data: result,
  });
});

const getAllPost = catchAsync(async (req, res) => {
  const result = await PostServices.getAllPostFromDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post are retrieved successfully",
    data: result,
  });
});

export const PostController = {
  createPost,
  getAllPost,
};
