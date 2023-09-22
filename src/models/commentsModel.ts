import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { Post } from "./postModel";

@Table({
  tableName: "comments",
})
export class Comments extends Model {
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
  text!: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  postId!: number;

  @BelongsTo(() => Post)
  post!: Post;
}
