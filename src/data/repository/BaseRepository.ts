import { Sequelize } from 'sequelize-typescript';
import config from '../../config';
import { Dialect } from 'sequelize';

export default class BaseRepository {
    sequelizeClient: Sequelize;
    defaultLimit: number = 100;
    constructor() {
        this.sequelizeClient = new Sequelize({
            host: config.db.host,
            port: config.db.port,
            database: config.db.database,
            dialect: config.db.dialect as Dialect,
            username: config.db.username,
            password: config.db.password,
            models: [__dirname + "/../models"]
        });

    }
}

export type Constructor<T = {}> = new (...args: any[]) => T;