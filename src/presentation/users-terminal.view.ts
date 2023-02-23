import { User } from "../domain/entities/user.entity";
import { UsersView } from "./users.presenter";

import {
  intro,
  outro,
  confirm,
  select,
  spinner,
  isCancel,
  cancel,
  text,
  note,
} from "@clack/prompts";
import { getUserPresenter } from "./main";

export class UsersTerminalView implements UsersView {
  private presenter = getUserPresenter(this);

  start(){
    this.presenter.onInit();
  }

  showInitialMessage(): void {
    intro("Welcome to the app!");
  }

  showSuccessMessage(): void {
    outro("User was created!");
  }

  showEndMessage(): void {
    outro("You're all set!");
    return process.exit(0);
  }

  showError(message: string): void {
    note(message, "Something wrong happened !");
  }

  async askForName() {
    const name = await text({
      message: "What is name?",
      placeholder: "Foo",
    });

    this.operationWasCanceled(name as symbol);

    return name as string;
  }

  async askForEmail(): Promise<string> {
    const email = await text({
      message: "What is email?",
      placeholder: "foo@g.com",
    });

    this.operationWasCanceled(email as symbol);

    return email as string;
  }

  async askForPassword(): Promise<string> {
    const password = await text({
      message: "What is your password?",
    });

    this.operationWasCanceled(password as symbol);

    return password as string;
  }

  operationWasCanceled(value: symbol) {
    if (isCancel(value)) {
      this.presenter.onDestroy();
    }
  }

  listUsers(users: User[]): void {
    intro("List Users");
    intro("-------");

    users.forEach((user) => {
      intro(`${user.props.name} - ${user.props.email.value}`);
    });
    intro("-------");

    this.presenter.askUserInfo();
  }
}
