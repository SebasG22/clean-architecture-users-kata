import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";

export interface UserProps {
  name: string;
  email: string;
  password: string;
}

export interface UserPropsNormalized {
  id: number;
  name: string;
  email: Email;
  password: Password;
}

export class User {
  constructor(public props: UserPropsNormalized) {}

  static create(data: UserProps) {
      const email = Email.create(data.email);
      const password = Password.create(data.password);
      return new User({
        id: Math.round(Math.random() * 100),
        name: data.name,
        email,
        password,
      });
  }
}
