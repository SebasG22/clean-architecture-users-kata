import { User } from "../domain/entities/user.entity";
import { GetUserListUseCase } from "../domain/use-cases/get-user-list";
import { SaveUserUseCase } from "../domain/use-cases/save-user";

export interface UsersView {
  showInitialMessage(): void;
  showEndMessage(): void;
  showSuccessMessage(): void;
  showError(message: string): void;
  listUsers(Users: User[]): void;
  askForName(): Promise<string>;
  askForEmail(): Promise<string>;
  askForPassword(): Promise<string>;
}

export class UserPresenter {
  constructor(
    public view: UsersView,
    public createUserUseCase: SaveUserUseCase,
    public getUserListUseCase: GetUserListUseCase
  ) {}

  onInit() {
    this.view.showInitialMessage();
    this.getUsers();
  }

  async askUserInfo() {
    const name = await this.view.askForName();
    const email = await this.view.askForEmail();
    const password = await this.view.askForPassword();

    try {
      const user = User.create({
        name,
        email,
        password,
      });
      this.saveUser(user);
    } catch (e) {
      this.view.showError(e);
    }
  }

  saveUser(user: User) {
    try {
      this.createUserUseCase.execute(user);
      this.askUserInfo();
      this.view.showSuccessMessage();
    } catch (e) {
      this.view.showError(e);
    }
  }

  getUsers() {
    const users = this.getUserListUseCase.execute();
    this.view.listUsers(users);
  }

  onDestroy(){
    this.view.showEndMessage();
  }
}
