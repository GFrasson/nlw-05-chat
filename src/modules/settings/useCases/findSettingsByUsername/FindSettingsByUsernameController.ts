import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindSettingsByUsernameUseCase } from './FindSettingsByUsernameUseCase';

class FindSettingsByUsernameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;

        const findSettingsByUsernameUseCase = container.resolve(FindSettingsByUsernameUseCase);
        const settings = await findSettingsByUsernameUseCase.execute({
            username
        });

        return response.json(settings);
    }
}

export { FindSettingsByUsernameController };
