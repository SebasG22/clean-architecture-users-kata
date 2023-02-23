import { useEffect, useState } from "react";
import { User } from "../domain/entities/user.entity";
import { UsersReactView } from "../presentation/users-vite-react.view";

export const view = new UsersReactView();

export function UserFormPresenter() {
  const [userState, userSetState] = useState<{ users?: User[] }>({});
  view.start(userSetState);

  useEffect(() => {
    view.showAllUsers();
  }, []);

  useEffect(() => {
    console.warn("Se actualizo el estado ", { userState });
  }, [userState]);

  const askForDetails = () => {
    view.askForUser();
  };

  return (
    <>
      <button onClick={askForDetails}> Create a User </button>
    </>
  );
}
