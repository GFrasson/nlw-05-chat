import { inject, injectable } from "tsyringe";

import { IConnectionsRepository } from "@modules/connections/repositories/IConnectionsRepository";
import { IMessagesRepository } from "@modules/messages/repositories/IMessagesRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { Message } from "@modules/messages/infra/typeorm/entities/Message";

interface ICreateConnectionRequest {
    text: string;
    email: string;
    socket_id: string;
    admin_id?: string;
}

@injectable()
class CreateConnectionUseCase {
    constructor(
        @inject("ConnectionsRepository")
        private connectionsRepository: IConnectionsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("MessagesRepository")
        private messagesRepository: IMessagesRepository,
    ) {}

    async execute({ text, email, socket_id, admin_id }: ICreateConnectionRequest): Promise<Message[]> {
        let user = await this.usersRepository.findByEmail(email);

        if (!user) {
            user = await this.usersRepository.create({
                email
            });
        }
        
        const connection = await this.connectionsRepository.findByUserId(user.id);
        
        await this.connectionsRepository.create({
            socket_id,
            user_id: user.id,
            ...(connection && {
                id: connection.id
            })
        });

        await this.messagesRepository.create({
            text,
            user_id: user.id
        });

        const messages = await this.messagesRepository.listByUserId(user.id);

        return messages;
    }
}

export { CreateConnectionUseCase, ICreateConnectionRequest };
