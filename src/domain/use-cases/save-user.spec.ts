import { describe, it, expect} from "vitest";
import { User } from '../entities/user.entity';
import { SaveUserUseCase } from './save-user';

const users = [
    User.create({
        email: 'foo@foo.com',
        password: 'PassWORD1',
        name: 'Foo'
    }),
    User.create({
        email: 'jon@foo.com',
        password: 'PassWORD2',
        name: 'Jon'
    })
];

function withoutUsers(): SaveUserUseCase {
    return new SaveUserUseCase({
       getAll: () => [],
       getUserByEmail: () => {},
       save: () => users[0]
    });
}

function withUsers(): SaveUserUseCase {
    return new SaveUserUseCase({
       getAll: () => [users[0]],
       getUserByEmail: () => { users[0]},
       save: () => {}
    });
}


describe("Save User Use Case", () => {

    it("should save successfully a new valid user", async () => {
        const useCase = withoutUsers();

        const result = await useCase.execute(users[0]);

        expect(result).toBeTruthy();
    });

    it("should throw error when a user with the same email is already registered", async () => {
        const useCase = withUsers();

        const result = await useCase.execute(users[0]);

        expect(result).toBeFalsy();
    });
});