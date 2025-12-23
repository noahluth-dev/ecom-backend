import {
    CreationOptional,
    InferAttributes,
    InferCreationAttributes,
} from "sequelize";
import {
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from "sequelize-typescript";

@Table({
    tableName: 'users',
    modelName: 'User'
})
export default class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    @Column({
        primaryKey: true,
        type: DataType.BIGINT,
        autoIncrement: true
    })
    declare id: CreationOptional<number>;

    @Column
    declare name: string

    @Unique
    @Column
    declare email: string

    @CreatedAt
    declare createdAt: CreationOptional<Date>

    @UpdatedAt
    declare updatedAt: CreationOptional<Date>

    public toJSON() {
        return { ...this.get(), createdAt: undefined, updatedAt: undefined }
    }

}