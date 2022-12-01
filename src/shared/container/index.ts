import "reflect-metadata";
import { container } from "tsyringe";

import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";
import { IConnectionsRepository } from "@modules/connections/repositories/IConnectionsRepository";
import { SettingsRepository } from "@modules/settings/infra/typeorm/repositories/SettingsRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { MessagesRepository } from "@modules/messages/infra/typeorm/repositories/MessagesRepository";
import { ConnectionsRepository } from "@modules/connections/infra/typeorm/repositories/ConnectionsRepository";

container.registerSingleton<ISettingsRepository>("SettingsRepository", SettingsRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<IMessagesRepository>("MessagesRepository", MessagesRepository);

container.registerSingleton<IConnectionsRepository>("ConnectionsRepository", ConnectionsRepository);
