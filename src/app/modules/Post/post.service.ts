import { TPost } from "./post.interface";
import { Post } from "./post.model";

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPostFromDB = async () => {
  const result = await Post.find().populate("user");
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getAllPostFromDB,
};