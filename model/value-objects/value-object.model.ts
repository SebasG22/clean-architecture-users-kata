export class ValueObject {
    static compare(vo1, vo2) {
        return JSON.stringify(vo1) === JSON.stringify(vo2);
      } 
}