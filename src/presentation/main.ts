import { UsersMemory } from "../data/usersMemory";
import { SaveUserUseCase } from "../domain/use-cases/save-user";
import { GetUserListUseCase } from "../domain/use-cases/get-user-list";

const usersMemory = new UsersMemory();

export const createUserUseCase = new SaveUserUseCase(usersMemory);
export const getUserListUseCase = new GetUserListUseCase(usersMemory);
