export function CompareValueObject(vo1, vo2) {
  return JSON.stringify(vo1) === JSON.stringify(vo2);
}

export function CompareEntities(e1, e2) {
  return e1.id == e2.id;
}
