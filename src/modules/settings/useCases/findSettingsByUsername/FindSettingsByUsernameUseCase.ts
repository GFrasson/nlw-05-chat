import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { inject, injectable } from "tsyringe";

interface IFindSettingsByUsernameRequest {
    username: string;
}

@injectable()
class FindSettingsByUsernameUseCase {
    constructor(
        @inject("SettingsRepository")
        private settingsRepository: ISettingsRepository
    ) {}

    async execute({ username }: IFindSettingsByUsernameRequest): Promise<Setting> {
        const settings = await this.settingsRepository.findByUsername(username);
        return settings;
    }
}

export { FindSettingsByUsernameUseCase, IFindSettingsByUsernameRequest };
