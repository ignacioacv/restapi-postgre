import { sequelize } from "../database/db";

export async function connectionDB() {
  try {
    await sequelize.sync();
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
}
