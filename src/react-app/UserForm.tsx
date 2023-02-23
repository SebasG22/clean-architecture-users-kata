import { useEffect } from "react";
import { UsersInLocalStorage } from "../data/usersInLocalStorage";
import { UsersMemory } from "../data/usersMemory";
import { GetUserListUseCase } from "../domain/use-cases/get-user-list";
import { SaveUserUseCase } from "../domain/use-cases/save-user";
import { UseUser } from "../presentation/users-vite-react.hook";

const usersMemory = new UsersMemory();
const usersLocalStorage= new UsersInLocalStorage();


export const createUserUseCase = new SaveUserUseCase(usersLocalStorage);
export const getUserListUseCase = new GetUserListUseCase(usersLocalStorage);

export function UserForm() {
  const { userState, createUser } = UseUser(
    createUserUseCase,
    getUserListUseCase
  );

  useEffect(()=>{
        console.warn({userState});
  }, [userState]);

  const handleSubmit = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser({ name, email, password });
    
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Foo"></input>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="fooo@g.com"
        ></input>
        <input type="password" id="password" name="password"></input>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
