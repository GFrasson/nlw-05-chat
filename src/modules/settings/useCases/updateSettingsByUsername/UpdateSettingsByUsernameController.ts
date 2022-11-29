import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateSettingsByUsernameUseCase } from './UpdateSettingsByUsernameUseCase';

class UpdateSettingsByUsernameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const { chat } = request.body;

        const updateSettingsByUsernameUseCase = container.resolve(UpdateSettingsByUsernameUseCase);
        await updateSettingsByUsernameUseCase.execute({
            username,
            chat
        });

        return response.send();
    }
}

export { UpdateSettingsByUsernameController };
