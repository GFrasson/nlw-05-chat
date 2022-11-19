import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMessageUseCase } from './CreateMessageUseCase';

class CreateMessageController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, admin_id, text } = request.body;

        const createMessageUseCase = container.resolve(CreateMessageUseCase);
        const message = await createMessageUseCase.execute({
            user_id,
            admin_id,
            text
        });

        return response.status(201).json(message);
    }
}

export { CreateMessageController };
