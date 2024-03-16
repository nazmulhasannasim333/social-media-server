import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await UserServices.createUserIntoDB(userData);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully!",
    data: {
      accessToken,
    },
  });
});

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.user;
  const result = await UserServices.getMeFromDB(email, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is retrieved successfully",
    data: result,
  });
});

const userInfo = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.userInfoFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User info is retrieved successfully",
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await UserServices.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Status is updated successfully",
    data: result,
  });
});

const updateUserProfile = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await UserServices.updateUserProfileFromDB(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile updated successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  getMe,
  changeStatus,
  loginUser,
  userInfo,
  updateUserProfile,
};
