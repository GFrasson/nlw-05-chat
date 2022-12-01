import { Server, Socket } from 'socket.io';
import { container } from 'tsyringe';

import { AdminListAllConnectionsUseCase } from './AdminListAllConnectionsUseCase';

class AdminListAllConnectionsController {
    async handle(socket: Socket, io: Server): Promise<void> {
        const adminListAllConnectionsUseCase = container.resolve(AdminListAllConnectionsUseCase);
        const allConnectionsWithoutAdmin = await adminListAllConnectionsUseCase.execute();

        io.emit("admin_list_all_connections", allConnectionsWithoutAdmin);
    }
}

export { AdminListAllConnectionsController };
