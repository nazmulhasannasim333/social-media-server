import QueryBuilder from "../../builder/QueryBuilder";
import { TPost } from "./post.interface";
import { Post } from "./post.model";

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPostFromDB = async (query: Record<string, unknown>) => {
  const postSearchableFields = ["postText"];

  const productQuery = new QueryBuilder(Post.find(), query).search(
    postSearchableFields
  );

  const result = await productQuery.modelQuery
    .populate("userId")
    .sort({ createdAt: -1 });
  return result;
};

const getAllPostByUserIdFromDB = async (userId: string) => {
  const result = await Post.find({ userId })
    .populate("userId")
    .sort({ createdAt: -1 });
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
