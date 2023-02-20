import { Password } from "./password.vo";
import { ValueObject } from "./value-object.model";

describe("Password Value Object", () => {
  describe("validate", () => {
    it("Should return false because the password is valid", () => {
      const password = "foo";

      expect(Password.validate(password)).toBe(false);
    });

    it("Should return true because the password is valid", () => {
      const password = "foooooo";

      expect(Password.validate(password)).toBe(true);
    });
  });

  describe("compare", () => {
    it("Should be a value Object", () => {
      const password = "foooooo";

      const pass1 = Password.create(password);
      const pass2 = Password.create(password);

      expect(ValueObject.compare(pass1, pass2)).toBe(true);
    });
  });
});
