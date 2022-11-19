import { ICreateMessageDTO } from "../dtos/ICreateMessageDTO";
import { Message } from "../infra/typeorm/entities/Message";

interface IMessagesRepository {
    create(data: ICreateMessageDTO): Promise<Message>;
    listByUserId(user_id: string): Promise<Message[]>;
}

export { IMessagesRepository };
