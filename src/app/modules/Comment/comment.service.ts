import { Comment } from "./comment.model";
import { TComment } from "./comment.interface";

const createCommentIntoDB = async (payload: TComment) => {
  const result = await Comment.create(payload);
  return result;
};

const getCommentsFromDB = async (postId: string) => {
  const result = await Comment.find({ postId }).populate("postId userId");
  return result;
};

export const CommentServices = {
  createCommentIntoDB,
  getCommentsFromDB,
};
