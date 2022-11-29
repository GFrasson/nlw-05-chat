import { User } from "@modules/users/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("connections")
class Connection {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    socket_id: string;

    @Column()
    user_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User, (user) => user.connections)
    user: User;

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

export { Connection };
