import { UsersMemory } from "../data/usersMemory";
import { SaveUserUseCase } from "../domain/use-cases/save-user";
import { GetUserListUseCase } from "../domain/use-cases/get-user-list";
import { UserPresenter, UsersView } from "./users.presenter";
import { UsersTerminalView } from "./users-terminal.view";

const usersMemory = new UsersMemory();

export const createUserUseCase = new SaveUserUseCase(usersMemory);
export const getUserListUseCase = new GetUserListUseCase(usersMemory);

export const getUserPresenter = (view: UsersView) =>{
    return new UserPresenter(
        view,
        createUserUseCase,
        getUserListUseCase
      );
}

export const view = new UsersTerminalView();
view.start();
