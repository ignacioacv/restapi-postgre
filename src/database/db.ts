import { Sequelize } from "sequelize-typescript";

import { Post } from "../models/postModel";
import { Comments } from "../models/commentsModel";
import { Tag } from "../models/tagsModel";
import { PostTag } from "../models/postTagsModel";

export const sequelize = new Sequelize({
  database: "PostgresApiRest",
  username: "postgres",
  password: "9053DAF9",
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  models: [Post, Comments, Tag, PostTag],
});

export default sequelize;
