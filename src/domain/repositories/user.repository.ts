import { User } from "../entities/user.entity";

export interface UserRepository {
    getUserByEmail(email: string): User | void;
    getAll(): User[];
    save(user: User): void;
}