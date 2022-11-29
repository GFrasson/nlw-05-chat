import { Request, Response } from 'express';
import { Socket } from 'socket.io';
import { container } from 'tsyringe';

import { CreateConnectionUseCase } from './CreateConnectionUseCase';

interface IParams {
    email: string;
    text: string;
}

class CreateConnectionController {
    async handle(socket: Socket, params: IParams): Promise<void> {
        const { text, email } = params;

        const createConnectionUseCase = container.resolve(CreateConnectionUseCase);
        await createConnectionUseCase.execute({
            text,
            email,
            socket_id: socket.id
        });
    }
}

export { CreateConnectionController };
