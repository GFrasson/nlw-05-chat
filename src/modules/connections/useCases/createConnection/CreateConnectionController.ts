import { Server, Socket } from 'socket.io';
import { container } from 'tsyringe';

import { CreateConnectionUseCase } from './CreateConnectionUseCase';

interface IParams {
    email: string;
    text: string;
}

class CreateConnectionController {
    async handle(socket: Socket, io: Server, params: IParams): Promise<void> {
        const { text, email } = params;

        const createConnectionUseCase = container.resolve(CreateConnectionUseCase);
        const messages = await createConnectionUseCase.execute({
            text,
            email,
            socket_id: socket.id
        });

        socket.emit("client_list_all_messages", messages);
    }
}

export { CreateConnectionController };
