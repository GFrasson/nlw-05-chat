import AppDataSource from "@shared/infra/typeorm";
import { Repository } from "typeorm";

import { ICreateSettingsDTO } from "@modules/settings/dtos/ICreateSettingsDTO";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";

import { Setting } from "../entities/Setting";

class SettingsRepository implements ISettingsRepository {
    private repository: Repository<Setting>;

    constructor() {
        this.repository = AppDataSource.getRepository(Setting);
    }

    async create({ username, chat }: ICreateSettingsDTO): Promise<Setting> {
        const setting = this.repository.create({
            username,
            chat
        });

        await this.repository.save(setting);

        return setting;
    }
}

export { SettingsRepository };
