import * as dotenv from "dotenv";

dotenv.config();

export const username_env = process.env.USERNAME;
export const password_env = process.env.PASSWORD;
export const database_env = process.env.DATABASE;
export const host_env = process.env.HOST;
