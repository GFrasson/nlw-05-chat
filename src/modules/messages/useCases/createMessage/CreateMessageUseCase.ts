import { Message } from "@modules/messages/infra/typeorm/entities/Message";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface ICreateMessageRequest {
    user_id: string;
    admin_id?: string;
    text: string;
}

@injectable()
class CreateMessageUseCase {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: IMessagesRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ user_id, admin_id, text }: ICreateMessageRequest): Promise<Message> {
        const userExists = await this.usersRepository.findById(user_id);

        if (!userExists) {
            throw new AppError("User does not exist", 404);
        }

        const message = await this.messagesRepository.create({
            user_id,
            admin_id,
            text
        });

        return message;
    }
}

export { CreateMessageUseCase, ICreateMessageRequest };
