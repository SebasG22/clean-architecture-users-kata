import { Entity } from "./entity";

describe("Entity", () => {
  describe("compare", () => {
    it("should return false when passing an invalid entity", () => {
      expect(Entity.compare({}, {})).toBe(false);
    });

    it("should return true when passing a valid entity", () => {
      expect(
        Entity.compare({ id: 1, name: "foo" }, { id: 1, name: "demo" })
      ).toBe(true);
    });
  });
});
