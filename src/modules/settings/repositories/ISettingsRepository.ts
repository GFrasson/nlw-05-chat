import { ICreateSettingsDTO } from "../dtos/ICreateSettingsDTO";
import { Setting } from "../infra/typeorm/entities/Setting";

interface ISettingsRepository {
    create(data: ICreateSettingsDTO): Promise<Setting>;
    updateByUsername(username: string, chat: boolean): Promise<void>;
    findByUsername(username: string): Promise<Setting>;
}

export { ISettingsRepository };
