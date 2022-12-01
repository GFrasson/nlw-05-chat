import { Connection } from "@modules/connections/infra/typeorm/entities/Connection";
import { IConnectionsRepository } from "@modules/connections/repositories/IConnectionsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class AdminListAllConnectionsUseCase {
    constructor(
        @inject("ConnectionsRepository")
        private connectionsRepository: IConnectionsRepository
    ) {}

    async execute(): Promise<Connection[]> {
        const allConnectionsWithoutAdmin = await this.connectionsRepository.findAllWithoutAdmin();
        return allConnectionsWithoutAdmin;
    }
}

export { AdminListAllConnectionsUseCase };
