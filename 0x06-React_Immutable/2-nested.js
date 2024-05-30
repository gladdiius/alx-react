export default function accessImmutableObject(object, array) {
  return array.reduce((result, key) => ((result && result[key] !== undefined)
    ? result[key] : undefined), object);
}
