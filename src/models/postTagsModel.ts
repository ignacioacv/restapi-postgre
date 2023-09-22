import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";

import { Post } from "./postModel";
import { Tag } from "./tagsModel";

@Table({
  tableName: "postTags",
  timestamps: false,
})
export class PostTag extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  PostId!: number;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  etiquetaId!: number;

  @BelongsTo(() => Post)
  post!: Post;

  @BelongsTo(() => Tag)
  etiqueta!: Tag;
}
