import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

import { Post } from "./postModel";
import { PostTag } from "./postTagsModel";

@Table({
  tableName: "tags",
})
export class Tag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @BelongsToMany(() => Post, () => PostTag)
  posts!: Post[];
}
