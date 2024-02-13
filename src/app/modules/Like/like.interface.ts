import { Types } from "mongoose";

export interface TLike {
  postId: Types.ObjectId;
  userId: Types.ObjectId;
}
