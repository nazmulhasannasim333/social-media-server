import mongoose, { Schema } from "mongoose";
import { TLike } from "./like.interface";

const likeSchema = new Schema<TLike>(
  {
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Like = mongoose.model<TLike>("Like", likeSchema);
