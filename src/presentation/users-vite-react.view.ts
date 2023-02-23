import React from "react";
import { User } from "../domain/entities/user.entity";
import { getUserPresenterReact } from "./main";
import { UsersView } from "./users.presenter";

export type UserReactState = React.Dispatch<
  React.SetStateAction<{
    users?: User[];
  }>
>;

export class UsersReactView implements UsersView {
  private presenter = getUserPresenterReact(this);
  private setReactState: UserReactState;

  start(reactState: UserReactState) {
      this.setReactState = reactState;
  }

  showAllUsers(){
    this.presenter.getUsers();
  }

  askForUser(){
    this.presenter.askUserInfo();
  }

  showInitialMessage(): void {
    alert("Welcome to the app!");
  }
  showEndMessage(): void {
    alert("You're all set!");
  }
  showSuccessMessage(): void {
    alert("User was created!");
  }
  showError(message: string): void {
    alert(`Something wrong happened ! ${message}`);
  }
  listUsers(Users: User[]): void {
    this.setReactState({ users: Users });
  }
  askForName(): Promise<string> {
    let name = prompt("Your name");
    return Promise.resolve(name);
  }
  askForEmail(): Promise<string> {
    let email = prompt("Your email");
    return Promise.resolve(email);
  }
  askForPassword(): Promise<string> {
    let password = prompt('Your password');
    return Promise.resolve(password);
  }
}
