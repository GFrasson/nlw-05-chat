import "dotenv/config";
import { DatabaseType, DataSource } from 'typeorm';

import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { CreateSettings1667495819492 } from "./migrations/1667495819492-CreateSettings";
import { CreateUsers1668883540463 } from "./migrations/1668883540463-CreateUsers";
import { User } from "@modules/users/infra/typeorm/entities/User";

const dbType: DatabaseType = "postgres";

const AppDataSource = new DataSource({
    type: dbType,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    synchronize: false,
    logging: false,
    entities: [Setting, User],
    migrations: [CreateSettings1667495819492, CreateUsers1668883540463],
});

export function createConnection(): Promise<DataSource> {
    return AppDataSource.initialize();
}

export default AppDataSource;
