import { Password } from "./password.vo";
import { ValueObject } from "./value-object.model";

describe("Password Value Object", () => {
  describe("create", () => {
    let passwordValidateSpy;

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("Should create a password", () => {
      passwordValidateSpy = vi
        .spyOn(Password, "validate")
        .mockImplementation(() => true);
      const userPassword = "passWORD1";
      const password = Password.create(userPassword);

      expect(passwordValidateSpy).toHaveBeenCalledWith(userPassword);
      expect(password.value).toBe(userPassword);
    });

    it("Should not create a password because is not invalid", () => {
      passwordValidateSpy = vi
        .spyOn(Password, "validate")
        .mockImplementation(() => false);

      expect(() => Password.create("pass")).toThrowError(/Password not valid/);
    });
  });

  describe("validate", () => {
    it("Should return false because the password is not valid", () => {
      const password = "foo";

      expect(Password.validate(password)).toBe(false);
    });

    it("Should return true because the password is valid", () => {
      const password = "passWORD1";

      expect(Password.validate(password)).toBe(true);
    });
  });

  describe("compare", () => {
    it("Should be a value Object", () => {
      const password = "passWORD1";

      const pass1 = Password.create(password);
      const pass2 = Password.create(password);

      expect(ValueObject.compare(pass1, pass2)).toBe(true);
    });
  });
});
