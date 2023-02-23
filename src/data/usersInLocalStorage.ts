import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";

export class UsersInLocalStorage implements UserRepository {
  users: User[] = [];

  getAll(): User[] {
    return JSON.parse(window.localStorage.getItem("users"))  ?? [];
  }

  getUserByEmail(email: string) {
    return this.getAll().find((i) => i.props.email.value === email);
  }

  save(User: User): void {
    const users = this.getAll();

    window.localStorage.setItem("users", JSON.stringify([...users, User]));
  }
}
