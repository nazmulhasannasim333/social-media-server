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
  const result = await PostServices.getAllPostFromDB(req.query);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post are retrieved successfully",
    data: result,
  });
});

const getAllPostByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await PostServices.getAllPostByUserIdFromDB(userId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User post are retrieved successfully",
    data: result,
  });
});

const deletePost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const result = await PostServices.deletePostFromDB(postId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post deleted successfully",
    data: result,
  });
});

const updatePost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const result = await PostServices.updatePostFromDB(postId, req.body);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post updated successfully",
    data: result,
  });
});

export const PostController = {
  createPost,
  getAllPost,
  deletePost,
  updatePost,
  getAllPostByUserId,
};
