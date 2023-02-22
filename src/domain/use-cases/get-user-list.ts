import { UserRepository } from "../repositories/user.repository";

export class GetUserListUseCase {
  constructor(private userRepository: UserRepository) {}

  execute() {
   return this.userRepository.getAll();
  }
}
