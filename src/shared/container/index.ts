import "reflect-metadata";
import { container } from "tsyringe";

import { SettingsRepository } from "@modules/settings/infra/typeorm/repositories/SettingsRepository";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";

container.registerSingleton<ISettingsRepository>("SettingsRepository", SettingsRepository);
