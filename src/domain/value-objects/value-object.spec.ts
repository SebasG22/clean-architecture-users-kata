import { describe, it, expect } from "vitest";
import { ValueObject } from "./value-object.model";

describe("Value Object", () => {
  describe("compare", () => {
    it("should return false when passing an invalid value object", () => {
      expect(ValueObject.compare({}, {})).toBe(false);
    });

    it("should return true when passing a valid value object", () => {
      expect(
        ValueObject.compare({ name: "foo" }, { name: "foo" })
      ).toBe(true);
    });
  });
});
