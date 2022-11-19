import { Repository } from "typeorm";
import AppDataSource from "@shared/infra/typeorm";

import { ICreateMessageDTO } from "@modules/messages/dtos/ICreateMessageDTO";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";
import { Message } from "../entities/Message";

class MessagesRepository implements IMessagesRepository {
    private repository: Repository<Message>;

    constructor() {
        this.repository = AppDataSource.getRepository(Message);
    }

    async create({ user_id, admin_id, text }: ICreateMessageDTO): Promise<Message> {
        const message = this.repository.create({
            user_id,
            admin_id,
            text
        });

        await this.repository.save(message);

        return message;
    }

    async listByUserId(user_id: string): Promise<Message[]> {
        const messages = await this.repository.findBy({
            user_id
        });

        return messages;
    }
}

export { MessagesRepository };
