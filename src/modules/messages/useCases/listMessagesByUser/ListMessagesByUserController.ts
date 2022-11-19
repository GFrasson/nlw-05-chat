import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMessagesByUserUseCase } from './ListMessagesByUserUseCase';

class ListMessagesByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const listMessagesByUserUseCase = container.resolve(ListMessagesByUserUseCase);
        const messages = await listMessagesByUserUseCase.execute({
            user_id
        });

        return response.json(messages);
    }
}

export { ListMessagesByUserController };
