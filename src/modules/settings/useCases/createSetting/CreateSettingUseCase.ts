import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface ICreateSettingRequest {
    username: string;
    chat: boolean;
}

@injectable()
class CreateSettingUseCase {
    constructor(
        @inject("SettingsRepository")
        private settingsRepository: ISettingsRepository
    ) {}

    async execute({ username, chat }: ICreateSettingRequest): Promise<Setting> {
        const userAlreadyExists = await this.settingsRepository.findByUsername(username);

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        const setting = await this.settingsRepository.create({
            username,
            chat
        });

        return setting;
    }
}

export { CreateSettingUseCase, ICreateSettingRequest };
