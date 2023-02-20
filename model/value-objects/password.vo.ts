import { ValueObject } from "./value-object.model";

export interface PasswordProps {
  value: string;
}

export class Password extends ValueObject{
  constructor(public value: string) {
    super();
  }

  static create(password: string) {
    if (Password.validate(password)) {
      return new Password(password);
    }
    throw Error("Password not valid");
  }
  
  static validate(password: string){
   return password.length > 6;
  }
}
