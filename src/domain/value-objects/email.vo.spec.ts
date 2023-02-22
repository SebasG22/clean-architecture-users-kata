import { describe, it, expect, afterEach, vi } from "vitest";
import { Email } from "./email.vo";
import { ValueObject } from "./value-object.model";

describe("Email Value Object", () => {
  describe("create", () => {
    let emailValidateSpy;

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("Should create a email", () => {
      emailValidateSpy = vi
        .spyOn(Email, "validate")
        .mockImplementation(() => true);

      const email = Email.create("foo@f.com");

      expect(email.value).toBe("foo@f.com");
    });

    it("Should not create a email because email is invalid", () => {
      emailValidateSpy = vi
        .spyOn(Email, "validate")
        .mockImplementation(() => false);

      expect(() => Email.create("@foof.com")).toThrowError(/Email not valid/);
    });
  });

  describe("validate", () => {
    it("Should return false because the email is not valid", () => {
      const email = "foog.com";

      expect(Email.validate(email)).toBe(false);
    });

    it("Should return true because the email is valid", () => {
      const email = "foo@g.com";

      expect(Email.validate(email)).toBe(true);
    });
  });

  describe("compare", () => {
    it("Should be a value Object", () => {
      const email = "foo@g.com";

      const pass1 = Email.create(email);
      const pass2 = Email.create(email);

      expect(ValueObject.compare(pass1, pass2)).toBe(true);
    });
  });
});
