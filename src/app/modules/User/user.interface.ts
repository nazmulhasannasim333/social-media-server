/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  username: string;
  password: string;
  contactNo: string;
  gender: string;
  website: string;
  address: string;
  profileImg: string;
  coverImg: string;
  role: "superAdmin" | "admin" | "user";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
