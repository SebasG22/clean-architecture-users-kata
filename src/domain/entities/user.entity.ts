import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";
import { Entity } from "./entity";

export interface UserProps {
  id?: number;
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

export class User extends Entity {
  constructor(public props: UserPropsNormalized) {
    super();
  }

  static create(data: UserProps) {
    const email = Email.create(data.email);
    const password = Password.create(data.password);
    return new User({
      id: data.id ?? Math.round(Math.random() * 100),
      name: data.name,
      email,
      password,
    });
  }
}
