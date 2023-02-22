import { describe, expect, it } from "vitest";
import { User } from "../entities/user.entity";
import { GetUserListUseCase } from "../use-cases/get-user-list";

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


function withUsers(): GetUserListUseCase {
    return new GetUserListUseCase({
       getAll: () => [users[0]],
       getUserByEmail: () => { users[0]},
       save: () => {}
    });
}

describe('Get User List Use Case', () => {
    it("Should return all the users", async () => {
        const useCase = withUsers();

        const result = await useCase.execute();

        expect(result.length).toBe(1);

    });
});