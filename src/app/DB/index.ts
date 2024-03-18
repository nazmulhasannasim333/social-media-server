import { USER_ROLE } from "../modules/User/user.constant";
import { User } from "../modules/User/user.model";

const superUser = {
  name: "Md Nasim Hosen",
  email: "mdnasimhosen333@gmail.com",
  username: "nazmulhasannasim333",
  password: "admin123456",
  needsPasswordChange: false,
  role: USER_ROLE.superAdmin,
  status: "in-progress",
  isVerified: true,
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isSuperAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSuperAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
