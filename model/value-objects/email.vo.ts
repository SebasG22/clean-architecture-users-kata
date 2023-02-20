import { ValueObject } from "./value-object.model";

export interface EmailProps {
  value: string;
}

export class Email extends ValueObject {
  constructor(public value: string) {
    super();
  }

  static create(email: string) {
    if (Email.validate(email)) {
      return new Email(email);
    }
    throw Error("Email not valid");
  }

  static validate(email: string) {
    return email.includes("@");
  }
}
