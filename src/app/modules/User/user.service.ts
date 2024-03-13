import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { createToken } from "./user.utils";
import config from "../../config";
// import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";

// User Register
const createUserIntoDB = async (payload: TUser) => {
  if (await User.isUserExistsByEmail(payload.email)) {
    throw new AppError(httpStatus.BAD_REQUEST, "This email already used");
  }

  const result = User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }
  // checking if the user is already deleted
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
  }
  // checking if the user is blocked
  const userStatus = user?.status;
  if (userStatus === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked ! !");
  }
  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");
  //create token and sent to the  client
  const jwtPayload = {
    userId: user._id.toString(),
    username: user.username,
    name: user.name,
    role: user.role,
    email: user.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  return {
    accessToken,
  };
};

const getMeFromDB = async (email: string, role: string) => {
  let result = null;
  if (role === "user") {
    result = await User.findOne({ email });
  }
  if (role === "admin") {
    result = await User.findOne({ email });
  }
  if (role === "superAdmin") {
    result = await User.findOne({ email });
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getMeFromDB,
  changeStatus,
  loginUser,
};
