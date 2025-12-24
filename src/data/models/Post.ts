import { CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import User from "./User";


@Table({
    tableName: 'posts',
    modelName: 'Post'
})
export default class Post extends Model<
    InferAttributes<Post>,
    InferCreationAttributes<Post>
> {
    @Column({
        primaryKey: true,
        type: DataType.BIGINT,
        autoIncrement: true
    })
    declare id: CreationOptional<number>;

    @ForeignKey(() => User)
    @Column({
        type: DataType.BIGINT
    })
    declare user_id: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare title: string;

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    declare body: string;

    @CreatedAt
    declare created_at: CreationOptional<Date>

    @UpdatedAt
    declare updated_at: CreationOptional<Date>

    @BelongsTo(() => User)
    declare author: InferAttributes<User>

    public toJSON() {
        return { ...this.get(), created_at: undefined, updated_at: undefined, user_id: undefined }
    }

}