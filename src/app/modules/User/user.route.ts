import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post(
  "/register-user",
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.createUser
);

router.post(
  "/login",
  validateRequest(UserValidation.loginValidationSchema),
  UserController.loginUser
);

router.get(
  "/me",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  UserController.getMe
);

router.get("/get-all-user", UserController.getAllUser);
router.get("/user-info/:userId", UserController.userInfo);

router.post(
  "/change-status/:id",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserController.changeStatus
);

router.put(
  "/update-profile/:userId",
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.user),
  UserController.updateUserProfile
);

export const UserRoutes = router;
