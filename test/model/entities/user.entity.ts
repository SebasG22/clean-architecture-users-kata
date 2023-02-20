import { Email } from '../value-objects/email.vo';
import { Password } from '../value-objects/password.vo';

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface UserNormalized {
  name: string;
  email: Email;
  password: Password;
}
