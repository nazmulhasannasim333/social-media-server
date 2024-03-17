import { Types } from "mongoose";

export interface TFollow {
  followingUserId: Types.ObjectId;
  followerUserId: Types.ObjectId;
}
