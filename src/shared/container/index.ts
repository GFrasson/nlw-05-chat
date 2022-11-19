import "reflect-metadata";
import { container } from "tsyringe";

import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { SettingsRepository } from "@modules/settings/infra/typeorm/repositories/SettingsRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<ISettingsRepository>("SettingsRepository", SettingsRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
