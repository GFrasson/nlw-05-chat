import "dotenv/config";
import { DatabaseType, DataSource } from 'typeorm';

import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { CreateSettings1667495819492 } from "./migrations/1667495819492-CreateSettings";
import { CreateUsers1668883540463 } from "./migrations/1668883540463-CreateUsers";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { CreateMessages1668885184344 } from "./migrations/1668885184344-CreateMessages";
import { Message } from "@modules/messages/infra/typeorm/entities/Message";
import { CreateConnections1669741162844 } from "./migrations/1669741162844-CreateConnections";
import { Connection } from "@modules/connections/infra/typeorm/entities/Connection";

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
    entities: [Setting, User, Message, Connection],
    migrations: [
        CreateSettings1667495819492,
        CreateUsers1668883540463,
        CreateMessages1668885184344,
        CreateConnections1669741162844
    ],
});

export function createConnection(): Promise<DataSource> {
    return AppDataSource.initialize();
}

export default AppDataSource;
