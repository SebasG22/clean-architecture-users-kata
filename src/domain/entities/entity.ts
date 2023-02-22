export class Entity {
  static compare(e1, e2) {
    if (
      Object.keys(e1).length > 0 ||
      Object.keys(e2).length > 0 ||
      e1.hasOwnProperty("id") ||
      e2.hasOwnProperty("id")
    ) {
      return e1.id === e2.id;
    }
    return false;
  }
}
