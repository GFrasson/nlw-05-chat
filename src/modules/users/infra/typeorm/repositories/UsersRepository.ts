import AppDataSource from "@shared/infra/typeorm";
import { Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    
    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async create({ email }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            email
        });
        
        await this.repository.save(user);

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOneBy({
            id
        });

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({
            email
        });

        return user;
    }
}

export { UsersRepository };
