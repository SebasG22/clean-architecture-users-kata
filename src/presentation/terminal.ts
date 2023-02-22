import {
  intro,
  outro,
  confirm,
  select,
  spinner,
  isCancel,
  cancel,
  text,
} from "@clack/prompts";
import { User } from "../domain/entities/user.entity";
import { createUserUseCase } from "./main";

(async () => {
  intro(" create-users ");
  const name = await text({
    message: "What is name?",
    placeholder: "Foo",
  });

  const email = await text({
    message: "What is email?",
    placeholder: "foo@g.com",
  });

  const password = await text({
    message: "What is your password?"
  });

  if (isCancel(name) && isCancel(email) && isCancel(password)) {
    cancel("Operation cancelled");
    return process.exit(0);
  }

  try {
    const user: User = User.create({
      email: email as string,
      name: name as string,
      password: password as string,
    });

    createUserUseCase.execute(user);
  }
  catch(e){
    cancel(e)
    return process.exit(0);
  }

  

  outro("You're all set!");
})();


