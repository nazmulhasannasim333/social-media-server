import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
// import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";

// User Register
const createUserIntoDB = async (payload: TUser) => {
  if (await User.isUserExistsByEmail(payload.email)) {
    throw new AppError(httpStatus.BAD_REQUEST, "This email already used");
  }

  const result = User.create(payload);
  return result;
};

const getMeFromDB = async (email: string, role: string) => {
  let result = null;
  if (role === "user") {
    result = await User.findOne({ email });
  }
  if (role === "admin") {
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
};
