import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CommentServices } from "./comment.service";

const createComment = catchAsync(async (req, res) => {
  const commentData = req.body;
  const result = await CommentServices.createCommentIntoDB(commentData);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment created successfully",
    data: result,
  });
});

const getComments = catchAsync(async (req, res) => {
  const postId = req.params.postId;
  const result = await CommentServices.getCommentsFromDB(postId);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comments retrieved successfully",
    data: result,
  });
});

export const CommentController = {
  createComment,
  getComments,
};
