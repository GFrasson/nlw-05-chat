import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import "dotenv/config";
import { DatabaseType, DataSource } from 'typeorm';
import { CreateSettings1667495819492 } from "./migrations/1667495819492-CreateSettings";

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
    entities: [Setting],
    migrations: [CreateSettings1667495819492],
});

export function createConnection(): Promise<DataSource> {
    return AppDataSource.initialize();
}

export default AppDataSource;
