import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { inject, injectable } from "tsyringe";

interface IUpdateSettingsByUsernameRequest {
    username: string;
    chat: boolean;
}

@injectable()
class UpdateSettingsByUsernameUseCase {
    constructor(
        @inject("SettingsRepository")
        private settingsRepository: ISettingsRepository
    ) {}

    async execute({ username, chat }: IUpdateSettingsByUsernameRequest): Promise<void> {
        await this.settingsRepository.updateByUsername(username, chat);
    }
}

export { UpdateSettingsByUsernameUseCase, IUpdateSettingsByUsernameRequest };
