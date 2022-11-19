import { inject, injectable } from "tsyringe";

import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

interface ICreateUserRequest {
    email: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email }: ICreateUserRequest): Promise<User> {
        let user = await this.usersRepository.findByEmail(email);

        if (!user) {
            user = await this.usersRepository.create({
                email
            });
        }

        return user;
    }
}

export { CreateUserUseCase, ICreateUserRequest };
