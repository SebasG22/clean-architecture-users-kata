import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";

export class UsersMemory implements UserRepository{

    users: User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getUserByEmail(email: string){
        return this.users.find((i) => i.props.email.value === email);
    }

    save(User: User): void {
        this.users.push(User);
    }
}