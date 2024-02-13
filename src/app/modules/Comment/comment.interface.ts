import { Types } from "mongoose";

export interface TComment {
  commentText: string;
  postId: Types.ObjectId;
  userId: Types.ObjectId;
}
