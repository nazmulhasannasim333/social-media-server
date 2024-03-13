import app from "./app";
import mongoose from "mongoose";
import config from "./app/config/index";
import seedSuperAdmin from "./app/DB";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    seedSuperAdmin();
    app.listen(config.port, () => {
      console.log(`App running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
