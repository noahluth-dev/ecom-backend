import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize, Options } from "sequelize";
import config from "./config";
import { cwd } from "node:process";

const sequelize = new Sequelize({ ...config.db, dialect: "mysql" } as Options);

export const migrator = new Umzug({
    migrations: {
        glob: ["data/migrations/*.ts", { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
        tableName: 'migrations'
    }),
    logger: console
})

export type Migration = typeof migrator._types.migration; 