import { inject, injectable } from "tsyringe";

import { Message } from "@modules/messages/infra/typeorm/entities/Message";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";

interface IListMessagesByUserRequest {
    user_id: string;
}

@injectable()
class ListMessagesByUserUseCase {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: IMessagesRepository
    ) {}

    async execute({ user_id }: IListMessagesByUserRequest): Promise<Message[]> {
        const messages = await this.messagesRepository.listByUserId(user_id);

        return messages;
    }
}

export { ListMessagesByUserUseCase, IListMessagesByUserRequest };
