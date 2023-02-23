import { useState, useEffect } from "react";
import { User, UserProps } from "../domain/entities/user.entity";
import { GetUserListUseCase } from "../domain/use-cases/get-user-list";
import { SaveUserUseCase } from "../domain/use-cases/save-user";

export function UseUser(
  createUserUseCase: SaveUserUseCase,
  getUserListUseCase: GetUserListUseCase
) {
  const [userState, userSetState] = useState<{ users?: User[] }>({});

  useEffect(() => {
      getUsers();

  }, [getUserListUseCase]);
  
  const getUsers = () => {
    const users = getUserListUseCase.execute();
    userSetState({ users });
  };

  const createUser = (data: UserProps) => {
    try {
      const user: User = User.create({
        name: data.name,
        email: data.email,
        password: data.password
      });

      createUserUseCase.execute(user);
      getUsers();
    } catch (e) {
      console.error(e);
    }
  };

  return {
    userState, 
    getUsers, 
    createUser
 };
}
