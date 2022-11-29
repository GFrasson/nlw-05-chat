import { ICreateConnectionDTO } from "../dtos/ICreateConnectionDTO";
import { Connection } from "../infra/typeorm/entities/Connection";

interface IConnectionsRepository {
    create(data: ICreateConnectionDTO): Promise<Connection>;
    findByUserId(userId: string): Promise<Connection>;
}

export { IConnectionsRepository };
