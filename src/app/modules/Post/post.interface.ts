import { Types } from "mongoose";

export interface TPost {
  postText: string;
  postPhoto: string;
  user: Types.ObjectId;
}
