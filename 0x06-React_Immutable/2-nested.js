export default function accessImmutableObject(object, array) {
  let result = object;
  for (const key of array) {
    if (result[key] !== undefined) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  return result;
}
