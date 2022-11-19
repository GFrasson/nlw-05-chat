import { ICreateSettingsDTO } from "../dtos/ICreateSettingsDTO";
import { Setting } from "../infra/typeorm/entities/Setting";

interface ISettingsRepository {
    create(data: ICreateSettingsDTO): Promise<Setting>;
    findByUsername(username: string): Promise<Setting>;
}

export { ISettingsRepository };
