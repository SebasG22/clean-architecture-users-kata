import { describe, it, expect, afterEach, vi } from "vitest";
import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";
import { User } from "./user.entity";

describe("User Entity", () => {
  const user = {
    email: "foo@f.com",
    password: "passWORD1",
    name: "Foo",
  };

  describe("create", () => {
    let passwordValidateSpy;
    let emaiValidateSpy;

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("Should call email validate", () => {
      emaiValidateSpy = vi
        .spyOn(Email, "validate")
        .mockImplementation(() => true);

      User.create(user);

      expect(emaiValidateSpy).toHaveBeenCalled();
    });

    it("Should create a user", () => {
      vi.spyOn(Email, "validate").mockImplementation(() => true);
      passwordValidateSpy = vi
        .spyOn(Password, "validate")
        .mockImplementation(() => true);

      const person = User.create(user);

      expect(person.props.name).toBe(user.name);
      expect(person.props.password.value).toBe(user.password);
      expect(person.props.email.value).toBe(user.email);
    });

    it("Should not create a user because email is invalid", () => {
      vi.spyOn(Email, "validate").mockImplementation(() => false);
      passwordValidateSpy = vi
        .spyOn(Password, "validate")
        .mockImplementation(() => true);

      expect(() => User.create(user)).toThrowError(/Email not valid/);
    });

    it("Should not create a user because password is invalid", () => {
      passwordValidateSpy = vi
        .spyOn(Password, "validate")
        .mockImplementation(() => false);
      emaiValidateSpy = vi
        .spyOn(Email, "validate")
        .mockImplementation(() => true);

      expect(() => User.create(user)).toThrowError(/Password not valid/);
    });
  });

  describe("compare", () => {
    it("Should be a Entity", () => {
      const person = User.create({
        id: 1,
        ...user,
      });

      expect(User.compare(person, person)).toEqual(true);
    });

    it("Should be a Entity when compare 2 persons", () => {
      const person = User.create({
        id: 1,
        ...user,
      });

      const person2 = User.create({
        id: 1,
        ...user,
        password: "passWORD22",
      });

      expect(User.compare(person, person2)).toEqual(true);
    });
  });
});
