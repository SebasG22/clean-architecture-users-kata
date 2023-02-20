import { Email } from '../value-objects/email.vo';
import { UserInput } from './user.entity';
import { UserNormalized } from './user.entity';

export class UserRepository {
  create(data: UserInput) {
    new Email(data.emailsa);
  }
}
