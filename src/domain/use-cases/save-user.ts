import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class SaveUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: User) {
      const user = this.userRepository.getUserByEmail(data.props.email.value);
      if( !user ){
        return this.userRepository.save(data);
      }
      throw Error("User is already created");
    }
}
