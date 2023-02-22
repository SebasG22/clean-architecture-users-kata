export class ValueObject {
  static compare(vo1, vo2) {

    if (
      Object.keys(vo1).length > 0 ||
      Object.keys(vo2).length > 0 
      ) {
      return JSON.stringify(vo1) === JSON.stringify(vo2);
    }
    return false;
  }
}
