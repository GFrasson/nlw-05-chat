import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
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
        const setting = await this.settingsRepository.create({
            username,
            chat
        });

        return setting;
    }
}

export { CreateSettingUseCase, ICreateSettingRequest };
