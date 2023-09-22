import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  HasMany,
  //Scopes,
} from "sequelize-typescript";

import { Tag } from "../models/tagsModel";
import { Comments } from "./commentsModel";
import { PostTag } from "./postTagsModel";

// Definición del modelo 'Post'
@Table({
  tableName: "posts",
  timestamps: true,
})
export class Post extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @HasMany(() => Comments)
  comments?: Comments[];

  @BelongsToMany(() => Tag, () => PostTag)
  tags?: Tag[];
}
