import { ICreateConnectionDTO } from "@modules/connections/dtos/ICreateConnectionDTO";
import { IConnectionsRepository } from "@modules/connections/repositories/IConnectionsRepository";
import AppDataSource from "@shared/infra/typeorm";
import { Repository } from "typeorm";
import { Connection } from "../entities/Connection";

class ConnectionsRepository implements IConnectionsRepository {
    private repository: Repository<Connection>;
    
    constructor() {
        this.repository = AppDataSource.getRepository(Connection);
    }

    async create({ socket_id, user_id, admin_id, id }: ICreateConnectionDTO): Promise<Connection> {
        const connection = this.repository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.repository.save(connection);

        return connection;
    }

    async findByUserId(userId: string): Promise<Connection> {
        const connection = await this.repository.findOneBy({
            user_id: userId
        });

        return connection;
    }

    async findAllWithoutAdmin(): Promise<Connection[]> {
        const connections = await this.repository.find({
            where: {
                admin_id: null
            },
            relations: ["user"]
        });

        return connections;
    }
}

export { ConnectionsRepository };
