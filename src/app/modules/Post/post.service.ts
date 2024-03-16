import { TPost } from "./post.interface";
import { Post } from "./post.model";

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPostFromDB = async () => {
  const result = await Post.find().populate("userId");
  return result;
};

const getAllPostByUserIdFromDB = async (userId: string) => {
  const result = await Post.find({ userId }).populate("userId");
  return result;
};

const deletePostFromDB = async (postId: string) => {
  const result = await Post.findByIdAndDelete(postId);
  return result;
};
const updatePostFromDB = async (postId: string, post: Partial<TPost>) => {
  // console.log(post);
  const result = await Post.findByIdAndUpdate(postId, post, { new: true });
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getAllPostFromDB,
  deletePostFromDB,
  updatePostFromDB,
  getAllPostByUserIdFromDB,
};
