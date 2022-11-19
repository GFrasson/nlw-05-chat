import { Message } from "@modules/messages/infra/typeorm/entities/Message";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @OneToMany(() => Message, (message) => message.user)
    messages: Message[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
