import { z } from "zod";
import { UserStatus } from "./user.constant";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name is required",
    }),
    email: z
      .string({
        invalid_type_error: "Email is required",
      })
      .email({
        message: "Invalid email format",
      }),
    username: z.string({
      invalid_type_error: "Username is required",
    }),
    password: z.string({
      invalid_type_error: "Password is required",
    }),
    contactNo: z.string().optional(),
    gender: z.string().optional(),
    website: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
    role: z.enum(["superAdmin", "admin", "user"]).default("user"),
    status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    isDeleted: z.boolean().default(false),
  }),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
};
